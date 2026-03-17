import SectionLabel from './SectionLabel'
import { ABOUT_ROWS } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-[#001500]">
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="cat README.md" title="about.exe" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-10">
          {/* Bio */}
          <div className="bg-[#0a0a0a] border border-[#002200] p-8 leading-[1.9] text-[#bbf7d0] text-[0.88rem]">
            <p>
              Olá! Sou um desenvolvedor{' '}
              <strong className="text-[#00FF41]">Full Stack</strong> apaixonado
              por criar soluções completas — da arquitetura de banco de dados até
              a interface do usuário.
            </p>
            <p className="mt-4">
              Tenho experiência construindo aplicações escaláveis, APIs robustas
              e interfaces intuitivas. Cada linha de código é pensada com foco
              em <span className="text-[#00FF41]">performance</span>,
              manutenibilidade e experiência do usuário.
            </p>
          </div>

          {/* Table */}
          <div>
            {ABOUT_ROWS.map(({ label, value, highlight }) => (
              <div key={label} className="flex border-b border-[#001500] py-2 text-[0.83rem]">
                <span className="text-[#4ade80] min-w-[130px] shrink-0">{label}:</span>
                <span className={highlight ? 'text-[#00FF41]' : 'text-[#00FF41]'}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
