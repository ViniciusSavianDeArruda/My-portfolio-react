import { motion, useReducedMotion, type Variants } from "motion/react";
import type { KeyboardEvent } from "react";
import type { Project } from "../../types";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
  total: number;
  onOpen: (project: Project, trigger: HTMLElement) => void;
}

export default function ProjectShowcase({
  project,
  index,
  total,
  onOpen,
}: ProjectShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMuseumProject = index === total - 1;

  const cardVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const previewTech = project.tech.slice(0, 4);
  const openProject = (trigger: HTMLElement) => onOpen(project, trigger);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(event.currentTarget);
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Abrir detalhes do projeto ${project.name}`}
      onClick={(event) => openProject(event.currentTarget)}
      onKeyDown={handleKeyDown}
      className={`group relative isolate h-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0B0D12] shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition-[border-color,box-shadow] duration-300 hover:border-white/[0.12] hover:shadow-[0_22px_58px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9AACFF] ${
        isMuseumProject ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isMuseumProject ? "aspect-[2.1/1]" : "aspect-[16/11]"}`}>
        <img
          src={project.images[0]}
          alt={`Interface do projeto ${project.name}`}
          width={1280}
          height={720}
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.025] motion-safe:group-focus-visible:scale-[1.025] ${
            isMuseumProject ? "object-contain object-center" : "object-cover object-top"
          }`}
        />

        <div className="pointer-events-none absolute inset-0 bg-[#07080B]/20 transition-colors duration-300 group-hover:bg-[#07080B]/55 group-focus-visible:bg-[#07080B]/55" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#07080B]/95 via-[#07080B]/70 to-transparent px-6 pb-6 pt-24 opacity-100 transition-[opacity,transform] duration-300 max-lg:translate-y-0 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100 sm:px-8 sm:pb-8">
          <h3
            id={`project-${project.id}-title`}
            className="font-hero text-[clamp(1.55rem,2.5vw,2.25rem)] font-semibold tracking-[-0.04em] text-[#F4F6FB]"
          >
            {project.name}
          </h3>
          <p className="mt-3 max-w-[560px] font-hero text-[0.9rem] leading-[1.6] text-[#D7DBE5]">
            {project.shortDesc}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {previewTech.map((technology) => (
              <span
                key={technology}
                className="border border-white/[0.12] bg-white/[0.04] px-2 py-1 font-mono text-[0.62rem] text-[#D7DBE5]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative z-20 flex min-h-[4.25rem] items-center justify-between gap-4 border-t border-white/[0.07] bg-[#0B0D12] px-5 sm:px-6">
        <p className="font-mono text-[0.62rem] tracking-[0.1em] text-[#A6ACB8]">
          <span className="text-[#9AACFF]">
            {project.id} / {String(total).padStart(2, "0")}
          </span>
          <span className="mx-2 text-white/[0.2]" aria-hidden="true">
            ·
          </span>
          {project.type.toUpperCase()}
        </p>
        <span className="group/footer inline-flex shrink-0 items-center gap-2 font-hero text-[0.86rem] font-semibold text-[#F4F6FB] transition-colors duration-200 group-hover:text-[#9AACFF]">
          Ver projeto
          <span
            className="text-[1rem] leading-none text-[#9AACFF] transition-transform duration-200 group-hover/footer:translate-x-[3px]"
            aria-hidden="true"
          >
            ↗
          </span>
        </span>
      </footer>
    </motion.article>
  );
}
