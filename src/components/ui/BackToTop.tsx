import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-50 inline-flex min-h-11 items-center gap-2 rounded-md border border-white/[0.07] bg-[#0B0D12]/95 px-4 font-hero text-[0.78rem] font-semibold text-[#F4F6FB] shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition-[transform,border-color,color,opacity] duration-200 hover:-translate-y-px hover:border-[#5B7CFF]/60 hover:text-[#9AACFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span aria-hidden="true">↑</span>
      Topo
    </button>
  );
}
