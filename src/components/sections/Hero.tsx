import useTypewriter from "../../hooks/useTypewriter";
import MatrixCanvas from "../ui/MatrixCanvas";
import { GithubIcon, LinkedinIcon } from "../ui/icons";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const displayed = useTypewriter();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-[60px] overflow-hidden grid-bg"
    >
      <MatrixCanvas />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 px-[clamp(1.5rem,5vw,4rem)] py-16 max-w-[860px] mx-auto flex flex-col items-center text-center">
        <p className="font-mono text-[0.78rem] text-green-400 mb-6">
          <span className="text-green-neon">root@portfolio</span>
          <span className="text-[#555]">:~$</span>
          <span className="text-green-300"> ./init.sh</span>
        </p>

        <h1 className="font-orbitron font-black text-[clamp(2.2rem,7vw,5.2rem)] leading-[1.05] mb-4 tracking-[-0.01em] text-green-neon glow animate-glitch">
          Vinicius Arruda
        </h1>

        <p className="font-orbitron text-[clamp(0.65rem,1.5vw,0.88rem)] text-green-dim tracking-[0.35em] uppercase mb-10 h-6">
          ▶ {displayed}
          <span className="animate-blink text-green-neon">|</span> ◀
        </p>

        <div className="font-mono text-[clamp(0.8rem,1.4vw,0.88rem)] leading-[2.2] mb-12 flex flex-col items-center">
          <div className="opacity-0 animate-[fadeUp_0.5s_ease_0.5s_forwards]">
            <span className="text-green-300">$ </span>
            Construindo soluções completas — do banco de dados à interface.
            <span className="animate-blink text-green-neon"> █</span>
          </div>
          <div className="opacity-0 animate-[fadeUp_0.5s_ease_1.8s_forwards]">
            <span className="text-green-300">$ </span>
            Código limpo. Arquitetura sólida. Performance real.
            <span className="animate-blink text-green-neon"> █</span>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center mb-14">
          <a
            href="https://github.com/ViniciusSavianDeArruda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.55rem] font-mono text-[0.82rem] px-7 py-[0.7rem] tracking-[0.14em] border border-green-neon text-green-neon bg-transparent hover:bg-green-neon hover:text-bg transition-all duration-200"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arrudavinicius/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.55rem] font-mono text-[0.82rem] px-7 py-[0.7rem] tracking-[0.14em] border border-neutral-700 text-green-400 bg-transparent hover:border-green-dim hover:text-green-neon transition-all duration-200"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>

        <div className="font-mono text-[0.72rem] text-green-400 flex gap-8 flex-wrap justify-center">
          <span>
            <span className="text-green-neon">●</span> DISPONÍVEL PARA PROJETOS
          </span>
          <span>
            <span className="text-amber">◆</span> BRASIL
          </span>
          <span>
            <span className="text-blue-400">▶</span> FULL STACK
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer border-none bg-transparent"
        aria-label="Scroll para baixo"
      >
        <span className="font-mono text-[0.6rem] text-neutral-600 tracking-[0.15em]">
          SCROLL
        </span>
        <span
          className="text-green-neon text-lg animate-bounce"
          style={{ textShadow: "0 0 8px #00FF41" }}
        >
          ↓
        </span>
      </button>
    </section>
  );
}
