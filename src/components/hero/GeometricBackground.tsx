import { useEffect, useRef } from "react";

export default function GeometricBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const parent = element?.parentElement;
    if (!element || !parent) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId: number | undefined;
    let tracking = false;

    const resetLight = () => {
      element.style.setProperty("--mouse-x", "50%");
      element.style.setProperty("--mouse-y", "50%");
    };

    const updateLight = (event: PointerEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const bounds = parent.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        element.style.setProperty("--mouse-x", `${x.toFixed(2)}%`);
        element.style.setProperty("--mouse-y", `${y.toFixed(2)}%`);
        frameId = undefined;
      });
    };

    const startTracking = () => {
      if (tracking || motionQuery.matches) return;
      parent.addEventListener("pointermove", updateLight, { passive: true });
      parent.addEventListener("pointerleave", resetLight);
      tracking = true;
    };

    const stopTracking = () => {
      if (!tracking) return;
      parent.removeEventListener("pointermove", updateLight);
      parent.removeEventListener("pointerleave", resetLight);
      tracking = false;
      resetLight();
    };

    const onMotionChange = () => {
      if (motionQuery.matches) stopTracking();
      else startTracking();
    };

    resetLight();
    startTracking();
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      stopTracking();
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div ref={ref} className="geometric-background" aria-hidden="true">
      <div className="geometric-depth" />
      <svg
        className="geometric-svg"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="65"
            height="65"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 65 0 L 0 0 0 65"
              fill="none"
              stroke="#485675"
              strokeOpacity="0.07"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect width="1000" height="700" fill="url(#hero-grid)" />

        <g className="geometric-lines" fill="none">
          <line
            x1="0"
            y1="154"
            x2="1000"
            y2="154"
            stroke="#6F86FF"
            strokeDasharray="1 9"
            strokeLinecap="round"
            strokeWidth="0.8"
            opacity="0.26"
          />
          <line
            x1="0"
            y1="336"
            x2="1000"
            y2="336"
            stroke="#536079"
            strokeDasharray="none"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <line
            x1="0"
            y1="567"
            x2="1000"
            y2="567"
            stroke="#6F86FF"
            strokeDasharray="1 9"
            strokeLinecap="round"
            strokeWidth="0.8"
            opacity="0.26"
          />
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="700"
            stroke="#536079"
            strokeDasharray="none"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <line
            x1="680"
            y1="0"
            x2="680"
            y2="700"
            stroke="#6F86FF"
            strokeDasharray="1 9"
            strokeLinecap="round"
            strokeWidth="0.8"
            opacity="0.26"
          />
          <line
            x1="820"
            y1="0"
            x2="820"
            y2="700"
            stroke="#536079"
            strokeDasharray="none"
            strokeWidth="0.5"
            opacity="0.08"
          />
        </g>

        <g className="geometric-dots" fill="currentColor">
          <circle cx="200" cy="140" r="1.5" className="geometric-dot dot-one" />
          <circle cx="800" cy="140" r="1.5" className="geometric-dot dot-two" />
          <circle cx="200" cy="560" r="2" className="geometric-dot dot-three" />
          <circle
            cx="800"
            cy="560"
            r="1.5"
            className="geometric-dot dot-four"
          />
          <circle
            cx="500"
            cy="350"
            r="1.8"
            className="geometric-dot dot-five"
          />
        </g>

        <g className="geometric-floating-dots" fill="currentColor">
          <circle
            cx="122"
            cy="286"
            r="1.5"
            className="floating-dot floating-one"
          />
          <circle
            cx="372"
            cy="506"
            r="2.5"
            className="floating-dot floating-two"
          />
          <circle
            cx="686"
            cy="244"
            r="2"
            className="floating-dot floating-three"
          />
          <circle
            cx="884"
            cy="454"
            r="2.25"
            className="floating-dot floating-four"
          />
        </g>

      </svg>
      <div className="geometric-mouse-light" />
    </div>
  );
}
