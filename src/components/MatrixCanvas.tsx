// codigo para o efeito matrix
import { useEffect, useRef } from "react";

export default function MatrixCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]@#$%^&*|\\".split(
      "",
    );
    const fs = 13;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const initDrops = () => {
      drops = Array(Math.floor(canvas.width / fs))
        .fill(0)
        .map(() => Math.random() * -50);
    };

    resize();
    initDrops();
    window.addEventListener("resize", resize);
    window.addEventListener("resize", initDrops);

    const interval = setInterval(() => {
      ctx.fillStyle = "rgba(8,8,8,0.055)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fs}px 'Share Tech Mono', monospace`;

      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const bright = Math.random() > 0.92;
        ctx.fillStyle = bright
          ? `rgba(0,255,65,${0.7 + Math.random() * 0.3})`
          : `rgba(0,${80 + Math.floor(Math.random() * 80)},0,${0.15 + Math.random() * 0.2})`;
        ctx.fillText(ch, i * fs, y * fs);
        if (y * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      });
    }, 55);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", initDrops);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
}
