import MatrixCanvas from "./MatrixCanvas";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[60px] overflow-hidden grid-bg"
    >
      <MatrixCanvas />
      <div className="relative z-10 px-[clamp(1.5rem,5vw,4rem)] py-16 max-w-[960px]">
        {/* Prompt */}
        <p className="font-mono text-[0.82rem] text-[#4ade80] mb-5">
          <span className="text-[#00FF41]">root@portfolio</span>:
          <span className="text-[#60a5fa]">~</span>
          /home/dev
          <span className="text-[#555]"> $</span>
          <span className="text-[#86efac]"> ./init.sh</span>
        </p>

        {/* Name */}
        <h1 className="font-orbitron font-black text-[clamp(2rem,7vw,5.2rem)] leading-[1.05] mb-3 tracking-[-0.01em] text-[#00FF41] glow animate-glitch">
          Vinicius Arruda
        </h1>

        {/* Role */}
        <p className="font-orbitron text-[clamp(0.65rem,1.5vw,0.9rem)] text-[#00AA2A] tracking-[0.35em] uppercase mb-10">
          ▶ Full Stack Developer ◀
        </p>

        {/* Typing lines */}
        <div className="font-mono text-[clamp(0.8rem,1.4vw,0.9rem)] leading-[2.1] mb-12">
          <div className="opacity-0 animate-[fadeUp_0.5s_ease_0.5s_forwards]">
            <span className="text-[#86efac]">$ </span>
            Construindo soluções completas — do banco de dados à interface.
            <span className="animate-blink text-[#00FF41]"> █</span>
          </div>
          <div className="opacity-0 animate-[fadeUp_0.5s_ease_1.8s_forwards]">
            <span className="text-[#86efac]">$ </span>
            Código limpo. Arquitetura sólida. Performance real.
            <span className="animate-blink text-[#00FF41]"> █</span>
          </div>
          <div className="opacity-0 animate-[fadeUp_0.5s_ease_3.1s_forwards]">
            <span className="text-[#86efac]">$ </span>
            Disponível para novos projetos e oportunidades.
            <span className="animate-blink text-[#00FF41]"> █</span>
          </div>
           <div className="opacity-0 animate-[fadeUp_0.5s_ease_3.1s_forwards]">
            <span className="text-[#86efac]">$ </span>
            Sempre Buscando estudar para evoluir e entregar o melhor resultado possível.
            <span className="animate-blink text-[#00FF41]"> █</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap mb-16">
          <button
            onClick={() => scrollTo("projects")}
            className="font-mono text-[0.82rem] px-7 py-[0.7rem] tracking-[0.14em] border border-[#00FF41] text-[#00FF41] bg-transparent hover:bg-[#00FF41] hover:text-[#080808] transition-all duration-200 cursor-pointer"
          >
            [ VER PROJETOS ]
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-mono text-[0.82rem] px-7 py-[0.7rem] tracking-[0.14em] border border-[#1a4d2e] text-[#4ade80] bg-transparent hover:border-[#00AA2A] hover:text-[#00FF41] transition-all duration-200 cursor-pointer"
          >
            [ CONTATO ]
          </button>
        </div>

        {/* Status */}
        <div className="font-mono text-[0.72rem] text-[#4ade80] flex gap-8 flex-wrap">
          <span>
            <span className="text-[#00FF41]">●</span> DISPONÍVEL PARA PROJETOS
          </span>
          <span>
            <span className="text-[#FFAA00]">◆</span> BRASIL
          </span>
          <span>
            <span className="text-[#60a5fa]">▶</span> FULL STACK
          </span>
        </div>
      </div>
    </section>
  );
}
