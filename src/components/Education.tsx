import SectionLabel from './SectionLabel'

export default function Education() {
  return (
    <section id="education" className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-[#001500]">
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="cat ./education.json" title="education.sh" />

        <div className="bg-[#0a0a0a] border border-[#002200] px-8 py-6 flex justify-between items-center flex-wrap gap-4 transition-all duration-300 hover:border-[#00FF41] cursor-default"
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(0,255,65,0.08)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
        >
          <div>
            <h3 className="font-orbitron text-[1rem] font-bold text-[#00FF41] mb-1">
              Sistemas de Informação
            </h3>
            <p className="font-mono text-[0.82rem] text-[#4ade80]">
              Universidade Franciscana — UFN
            </p>
          </div>
          <span className="font-mono text-[0.65rem] px-[10px] py-[3px] tracking-[0.1em] border border-[#FFAA00] text-[#FFAA00] whitespace-nowrap">
            EM ANDAMENTO
          </span>
        </div>
      </div>
    </section>
  )
}
