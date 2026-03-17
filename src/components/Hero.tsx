import MatrixCanvas from './MatrixCanvas' // biblioteca para o efeito de fundo estilo "Matrix"
import { useState, useEffect } from 'react' 

//funcao para efeito digitacao da hero
function RoleTypewriter() {
  const text = 'Full Stack Developer'
  const [displayed, setDisplayed] = useState('')
  // time para o efeito de digitação
  useEffect(() => {
    let i = 0
    const timer = setTimeout(function type() {
      i++
      setDisplayed(text.slice(0, i))
      if (i < text.length) setTimeout(type, 80) // se o i for menor que o tamanho do texto, continua digitando
    }, 600) // inicia o efeito apos 600ms
    return () => clearTimeout(timer) 
  }, [])

  return (
    <p className="font-orbitron text-[clamp(0.65rem,1.5vw,0.9rem)] text-[#00AA2A] tracking-[0.35em] uppercase mb-10">
      ▶ {displayed}<span className="animate-blink text-[#00FF41]">|</span> ◀
    </p>
  )
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[60px] overflow-hidden grid-bg"
    >
      <MatrixCanvas />
      <div className="relative z-10 px-[clamp(1.5rem,5vw,4rem)] py-16 max-w-[960px]">
        {/* Prompt */}
        <p className="font-mono text-[0.82rem] text-[#4ade80] mb-5">
          <span className="text-[#00FF41]">root@portfolio</span>
          :<span className="text-[#60a5fa]">~</span>
          /home/dev
          <span className="text-[#555]"> $</span>
          <span className="text-[#86efac]"> ./init.sh</span>
        </p>

        {/* Name */}
        <h1 className="font-orbitron font-black text-[clamp(2rem,7vw,5.2rem)] leading-[1.05] mb-3 tracking-[-0.01em] text-[#00FF41] glow animate-glitch">
          Vinicius Arruda
        </h1>

        {/* Role — typewriter */}
        <RoleTypewriter />

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
            Disponível para novos projetos
            <span className="animate-blink text-[#00FF41]"> █</span>
          </div>
          <div className="opacity-0 animate-[fadeUp_0.5s_ease_4.4s_forwards]">
            <span className="text-[#86efac]">$ </span>
            Sempre buscando evoluir cada vez mais para entregar o melhor resultado.
            <span className="animate-blink text-[#00FF41]"> █</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap mb-16">
          <a
            href="https://github.com/ViniciusSavianDeArruda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.55rem] font-mono text-[0.82rem] px-7 py-[0.7rem] tracking-[0.14em] border border-[#00FF41] text-[#00FF41] bg-transparent hover:bg-[#00FF41] hover:text-[#080808] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arrudavinicius/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.55rem] font-mono text-[0.82rem] px-7 py-[0.7rem] tracking-[0.14em] border border-[#1a4d2e] text-[#4ade80] bg-transparent hover:border-[#00AA2A] hover:text-[#00FF41] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="font-mono text-[0.72rem] text-[#4ade80] flex gap-8 flex-wrap">
          <span><span className="text-[#00FF41]">●</span> DISPONÍVEL PARA PROJETOS</span>
          <span><span className="text-[#FFAA00]">◆</span> BRASIL</span>
          <span><span className="text-[#60a5fa]">▶</span> FULL STACK</span>
        </div>
      </div>
    </section>
  )
}
