import { SKILL_CATEGORIES } from "../../data";
import type { Skill } from "../../types";
import SectionLabel from "../ui/SectionLabel";

// Brand logos that default to black/near-black and would vanish on the dark background
const LIGHT_OVERRIDE_ICONS = new Set([
  "nextdotjs",
  "github",
  "fastify",
  "express",
  "prisma",
]);

function SkillIcon({ skill }: { skill: Skill }) {
  const src = LIGHT_OVERRIDE_ICONS.has(skill.icon)
    ? `https://cdn.simpleicons.org/${skill.icon}/ffffff`
    : `https://cdn.simpleicons.org/${skill.icon}`;

  return (
    <div className="group flex flex-col items-center gap-[0.45rem] p-3 border border-transparent hover:border-neutral-700 hover:bg-[rgba(0,255,65,0.05)] transition-all duration-200 cursor-default">
      <img
        src={src}
        alt={skill.name}
        width={36}
        height={36}
        loading="lazy"
        className="icon-hover w-9 h-9"
      />
      <span className="font-mono text-[0.62rem] text-green-400 group-hover:text-green-neon text-center tracking-[0.06em] transition-colors duration-200 leading-tight">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-[clamp(1.5rem,5vw,4rem)] border-t border-neutral-900"
    >
      <div className="max-w-[920px] mx-auto">
        <SectionLabel cmd="ls -la ./technologies" title="skills.json" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="bg-bg-2 border border-neutral-800 p-3"
            >
              <p className="font-mono text-[0.68rem] text-green-400 tracking-[0.22em] mb-5 border-b border-neutral-900 pb-2">
                {cat.label}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
