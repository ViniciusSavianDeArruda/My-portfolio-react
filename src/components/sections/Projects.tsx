import { PROJECTS } from "../../data";
import SectionLabel from "../ui/SectionLabel";
import { GithubIcon, ExternalIcon } from "../ui/icons";

const linkCls =
  "inline-flex items-center gap-[0.45rem] font-mono text-[0.75rem] text-green-400 no-underline border border-neutral-700 px-3 py-1.5 transition-all duration-200 hover:text-green-neon hover:border-green-neon";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-neutral-900"
    >
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="git log --oneline --all" title="projects.sh" />

        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="group bg-bg-2 border border-neutral-800 overflow-hidden transition-all duration-300 hover:border-green-neon cursor-default"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 22px rgba(0,255,65,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                className={`flex flex-col md:flex-row ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGEM */}
                <div className="relative md:w-[45%] flex-shrink-0 overflow-hidden bg-[#060f0a] min-h-[220px]">
                  <img
                    src={project.photo}
                    alt={project.name}
                    width={800}
                    height={450}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)",
                    }}
                  />

                  <span className="absolute top-3 left-3 font-orbitron text-[0.65rem] text-green-400 bg-[rgba(8,8,8,0.85)] px-2 py-1 z-10">
                    #{project.id}
                  </span>
                </div>

                {/* CONTEÚDO */}
                <div className="flex flex-col justify-between p-6 md:p-8 flex-1">
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <h3 className="font-orbitron text-[1rem] font-bold text-green-dim group-hover:text-green-neon transition-colors duration-200">
                        {project.name}
                      </h3>

                      <span
                        className="font-mono text-[0.6rem] px-2 py-[3px] tracking-[0.1em] border whitespace-nowrap"
                        style={{
                          borderColor: project.statusColor,
                          color: project.statusColor,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-neutral-200 leading-[1.8] text-[0.85rem] mb-5">
                      {project.desc}
                    </p>

                    <div className="flex gap-[0.35rem] flex-wrap mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.65rem] text-green-400 border border-neutral-700 px-2 py-[2px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap pt-4 border-t border-neutral-900">
                    <a href={project.github} className={linkCls}>
                      <GithubIcon /> GitHub
                    </a>

                    {project.demo && (
                      <a href={project.demo} className={linkCls}>
                        <ExternalIcon /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
