import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  drift: number;
  phase: number;
  amplitude: number;
}

interface Fragment {
  value: string;
  x: number;
  y: number;
  opacity: number;
  drift: number;
  phase: number;
  fontSize: number;
}

export default function DigitalAtmosphere() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fragmentValues = ["01", "{}", "<>", "0x", "_", "/"];
    let prefersReducedMotion = reducedMotion.matches;
    let particles: Particle[] = [];
    let fragments: Fragment[] = [];
    let isVisible = true;
    let mouseX = 0;
    let mouseY = 0;
    let lastFrameTime = 0;
    let rafId: number | undefined;

    const randomPosition = (size: number) => {
      if (Math.random() > 0.45) return Math.random() * size;
      const edgeOffset = Math.pow(Math.random(), 1.6) * size;
      return Math.random() > 0.5 ? edgeOffset : size - edgeOffset;
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const particleCount = Math.min(16, Math.max(8, Math.floor(width / 100)));
      const fragmentCount = Math.min(9, Math.max(5, Math.floor(width / 180)));

      particles = Array.from({ length: particleCount }, () => ({
        x: randomPosition(width),
        y: randomPosition(height),
        radius: 0.55 + Math.random() * 0.8,
        opacity: 0.06 + Math.random() * 0.1,
        drift: 0.4 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        amplitude: 3 + Math.random() * 4,
      }));
      fragments = Array.from({ length: fragmentCount }, () => ({
        value:
          fragmentValues[Math.floor(Math.random() * fragmentValues.length)],
        x: randomPosition(width),
        y: randomPosition(height),
        opacity: 0.045 + Math.random() * 0.065,
        drift: 0.25 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        fontSize: 9.5 + Math.random() * 2,
      }));
    };

    const draw = (time = 0) => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const y =
          particle.y +
          Math.sin(time * 0.00022 * particle.drift + particle.phase) *
            particle.amplitude;
        const x = particle.x + mouseX * particle.drift;
        ctx.beginPath();
        ctx.arc(
          x,
          y + mouseY * particle.drift,
          particle.radius,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `rgba(154, 172, 255, ${particle.opacity})`;
        ctx.fill();
      });

      fragments.forEach((fragment) => {
        const y =
          fragment.y +
          Math.sin(time * 0.00016 * fragment.drift + fragment.phase) * 7;
        ctx.fillStyle = `rgba(144, 150, 163, ${fragment.opacity})`;
        ctx.font = `${fragment.fontSize}px 'Share Tech Mono', monospace`;
        ctx.fillText(
          fragment.value,
          fragment.x + mouseX * fragment.drift,
          y + mouseY * fragment.drift,
        );
      });
    };

    const animate = (time: number) => {
      if (!isVisible || prefersReducedMotion) return;
      rafId = requestAnimationFrame(animate);
      if (time - lastFrameTime < 80) return;
      lastFrameTime = time;
      draw(time);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouseX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 3;
      mouseY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 3;
    };
    const onMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (rafId) cancelAnimationFrame(rafId);
      draw();
      if (!prefersReducedMotion && isVisible)
        rafId = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !prefersReducedMotion && !rafId) {
        rafId = requestAnimationFrame(animate);
      }
      if (!isVisible && rafId) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      }
    });
    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });

    resize();
    draw();
    observer.observe(canvas);
    resizeObserver.observe(canvas);
    canvas.parentElement?.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    reducedMotion.addEventListener("change", onMotionChange);
    if (!prefersReducedMotion) rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
      resizeObserver.disconnect();
      canvas.parentElement?.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
