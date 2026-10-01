type Technology = {
  name: string;
  icon: string;
};

const DEVICON_BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECHNOLOGIES: Technology[] = [
  { name: "React", icon: `${DEVICON_BASE_URL}/react/react-original.svg` },
  {
    name: "TypeScript",
    icon: `${DEVICON_BASE_URL}/typescript/typescript-original.svg`,
  },
  { name: "Node.js", icon: `${DEVICON_BASE_URL}/nodejs/nodejs-original.svg` },
  { name: "Python", icon: `${DEVICON_BASE_URL}/python/python-original.svg` },
  { name: "FastAPI", icon: `${DEVICON_BASE_URL}/fastapi/fastapi-original.svg` },
  {
    name: "PostgreSQL",
    icon: `${DEVICON_BASE_URL}/postgresql/postgresql-original.svg`,
  },
  {
    name: "Tailwind CSS",
    icon: `${DEVICON_BASE_URL}/tailwindcss/tailwindcss-original.svg`,
  },
  { name: "Docker", icon: `${DEVICON_BASE_URL}/docker/docker-original.svg` },
  { name: "Git", icon: `${DEVICON_BASE_URL}/git/git-original.svg` },
  { name: "Prisma", icon: `${DEVICON_BASE_URL}/prisma/prisma-original.svg` },
];

function TechnologyList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="tech-marquee__list" aria-hidden={duplicate || undefined}>
      {TECHNOLOGIES.map((technology) => (
        <li className="tech-marquee__item" key={technology.name}>
          <img
            className="tech-marquee__icon"
            src={technology.icon}
            width="27"
            height="27"
            alt=""
            aria-hidden="true"
            draggable="false"
          />
          <span>{technology.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="Tecnologias principais">
      <div className="tech-marquee__viewport">
        <div className="tech-marquee__track">
          <TechnologyList />
          <TechnologyList duplicate />
        </div>
      </div>
    </section>
  );
}
