import SectionLabel from './SectionLabel'
import { PROJECTS } from '../data'

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const linkCls = "inline-flex items-center gap-[0.45rem] font-mono text-[0.75rem] text-[#4ade80] no-underline border border-[#1a4d2e] px-3 py-1.5 transition-all duration-200 hover:text-[#00FF41] hover:border-[#00FF41]"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-[#001500]">
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="git log --oneline --all" title="projects.sh" />

        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="group bg-[#0a0a0a] border border-[#002200] overflow-hidden transition-all duration-300 hover:border-[#00FF41] cursor-default"
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 22px rgba(0,255,65,0.1)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
            >
              {/* Alterna imagem esquerda/direita */}
              <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Imagem */}
                <div className="relative md:w-[45%] flex-shrink-0 overflow-hidden bg-[#060f0a]" style={{ minHeight: '220px' }}>
                  <img
                    src={project.photo}
                    alt={project.name}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)' }} />
                  <span className="absolute top-3 left-3 font-orbitron text-[0.65rem] text-[#4ade80] bg-[rgba(8,8,8,0.85)] px-2 py-1">
                    #{project.id}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col justify-between p-6 md:p-8 flex-1">
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <h3 className="font-orbitron text-[1rem] font-bold text-[#00AA2A] group-hover:text-[#00FF41] transition-colors duration-200">
                        {project.name}
                      </h3>
                      <span className="font-mono text-[0.6rem] px-2 py-[3px] tracking-[0.1em] border whitespace-nowrap"
                        style={{ borderColor: project.statusColor, color: project.statusColor }}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[#bbf7d0] leading-[1.8] text-[0.85rem] mb-5">{project.desc}</p>
                    <div className="flex gap-[0.35rem] flex-wrap mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="font-mono text-[0.65rem] text-[#4ade80] border border-[#1a4d2e] px-2 py-[2px]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap pt-4 border-t border-[#001500]">
                    <a href={project.github} className={linkCls}><GithubIcon /> GitHub</a>
                    {project.demo && <a href={project.demo} className={linkCls}><ExternalIcon /> Live Demo</a>}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}