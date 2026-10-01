import { motion, useReducedMotion, type Variants } from "motion/react";
import { useRef, useState } from "react";
import { PROJECTS } from "../../data";
import type { Project } from "../../types";
import ProjectDetailsDialog from "../projects/ProjectDetailsDialog";
import ProjectShowcase from "../projects/ProjectShowcase";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const headerVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const dividerVariants: Variants = shouldReduceMotion
    ? { hidden: { scaleX: 1 }, visible: { scaleX: 1 } }
    : {
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const cardsContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const openProject = (project: Project, trigger: HTMLElement) => {
    openerRef.current = trigger;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="projects-ambient px-[clamp(1.5rem,5vw,4rem)] py-20 md:py-28"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-[1320px]">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
          }}
          className="max-w-[660px]"
        >
          <motion.p
            variants={headerVariants}
            className="font-mono text-[0.72rem] tracking-[0.14em] text-[#9AACFF]"
          >
            04 / PROJETOS
          </motion.p>
          <motion.h2
            id="projects-title"
            variants={headerVariants}
            className="mt-5 font-hero text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#F4F6FB]"
          >
            Projetos que transformam
            <br />
            ideias em produto.
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="mt-6 font-hero text-[clamp(1rem,1.3vw,1.08rem)] leading-[1.65] text-[#A6ACB8]"
          >
            Uma seleção de projetos onde exploro produto, interface e engenharia.
          </motion.p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={dividerVariants}
          className="mt-14 h-px w-full origin-left bg-white/[0.07]"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={cardsContainerVariants}
          className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-6"
        >
          {PROJECTS.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS.length}
              onOpen={openProject}
            />
          ))}
        </motion.div>
      </div>
      <ProjectDetailsDialog
        project={selectedProject}
        onClose={closeProject}
        returnFocusRef={openerRef}
      />
    </section>
  );
}
