import { motion, useReducedMotion, type Variants } from "motion/react";
import { SKILL_CATEGORIES } from "../../data";
import type { Skill } from "../../types";

const LIGHT_OVERRIDE_ICONS = new Set([
  "nextdotjs",
  "github",
  "fastify",
  "express",
  "prisma",
]);

function SkillItem({ skill }: { skill: Skill }) {
  const src = LIGHT_OVERRIDE_ICONS.has(skill.icon)
    ? `https://cdn.simpleicons.org/${skill.icon}/ffffff`
    : `https://cdn.simpleicons.org/${skill.icon}`;

  return (
    <div className="group flex flex-col items-center gap-2.5 rounded-lg px-2 py-3 transition-all duration-200 hover:bg-white/[0.03]">
      <img
        src={src}
        alt=""
        width={34}
        height={34}
        loading="lazy"
        className="h-[34px] w-[34px] transition-transform duration-200 group-hover:-translate-y-0.5"
      />
      <span className="font-hero text-center text-[0.82rem] leading-tight text-[#A6ACB8] transition-colors duration-200 group-hover:text-[#F4F6FB]">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = shouldReduceMotion
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
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="skills"
      className="skills-ambient px-[clamp(1.5rem,5vw,4rem)] py-20 md:py-28"
      aria-labelledby="skills-title"
    >
      <motion.div
        className="mx-auto max-w-[1160px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
          },
        }}
      >
        <motion.div variants={itemVariants} className="max-w-[620px]">
          <p className="font-mono text-[0.72rem] tracking-[0.14em] text-[#9AACFF]">
            03 / STACK
          </p>
          <h2
            id="skills-title"
            className="mt-5 font-hero text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#F4F6FB]"
          >
            Tecnologias que uso
            <br />
            para construir.
          </h2>
          <p className="mt-6 font-hero text-[clamp(1rem,1.3vw,1.08rem)] leading-[1.65] text-[#A6ACB8]">
            Ferramentas que utilizo em projetos — do frontend à API,
            dados e infraestrutura.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div key={cat.label} variants={itemVariants}>
              <motion.div
                variants={dividerVariants}
                className="h-px w-full origin-left bg-white/[0.07]"
              />
              <p className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-[#9AACFF]">
                {cat.label}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-x-2 gap-y-1 sm:grid-cols-4 lg:grid-cols-5">
                {cat.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
