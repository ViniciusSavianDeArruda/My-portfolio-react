import SectionLabel from './SectionLabel'
import { CONTACT_LINKS } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-[#001500]">
      <div className="max-w-[920px] mx-auto text-center">
        <SectionLabel cmd="echo 'Vamos trabalhar juntos?'" title="contact.sh" center />

        <p className="font-mono text-[#bbf7d0] leading-[1.9] mx-auto max-w-[480px] text-[0.88rem] mt-8">
          Aberto para novos projetos, oportunidades e colaborações.
        </p>
        <a
          href="mailto:arrudavinicius283@gmail.com"
          className="inline-block font-orbitron text-[clamp(0.9rem,2.2vw,1.4rem)] text-[#00FF41] no-underline mt-8 mb-2 tracking-[0.04em] glow-sm transition-all duration-300 hover:[text-shadow:0_0_15px_#00FF41,0_0_30px_#00FF41]"
        >
          arrudavinicius283@gmail.com
        </a>

        <div className="flex justify-center gap-4 flex-wrap mt-9">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center px-8 py-6 border border-[#002200] bg-[#0a0a0a] no-underline min-w-[175px] gap-2 transition-all duration-300 hover:border-[#00FF41]"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0,255,65,0.1)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              <span className="font-mono text-[0.62rem] text-[#4ade80] tracking-[0.2em]">{link.label}</span>
              <span className="font-mono text-[0.8rem] text-[#00FF41]">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
