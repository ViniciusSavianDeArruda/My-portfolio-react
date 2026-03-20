export interface Project {
  id: string
  name: string
  desc: string
  tech: string[]
  status: string
  statusColor: string
  github: string
  demo?: string
  photo: string       
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'Fitnnes AI – Plataforma de Gestão de Treinos',
    desc: 'Plataforma full stack para gerenciamento de treinos com criação de planos, acompanhamento de exercícios e estatísticas de desempenho. O sistema conta com geração de sugestões de treino utilizando IA da OpenAI, além de autenticação segura e arquitetura modular.',
    tech: ['Next.Js', 'TypeScript','Tailwind CSS', 'Node.js', 'Prisma', 'Fastify', 'PostgreSQL', 'Docker'],
    status: 'PRODUCTION',
    statusColor: '#0088FF',
    github: 'https://github.com/ViniciusSavianDeArruda/Fitnnes-frontend',
    demo: 'https://app.fitnnesapp.online',
    photo: 'public/projects/fitAi.png',
  },
  {
    id: '02',
    name: 'Gestão de Acervo - Museu treze de maio',
    desc: 'Sistema desktop para gerenciamento completo de biblioteca e acervo histórico. Desenvolvido em Java com JavaFX, SQL Server e arquitetura MVC. Inclui controle de empréstimos, catalogação e auditoria de operações.',
    tech: ['Java', 'JavaFx', 'SQL Server', 'MVC'],
    status: 'OPEN SOURCE',
    statusColor: '#00FF41',
    github: 'https://github.com/ViniciusSavianDeArruda/SistemaDeGerenciamentoDeAcervo_MuseuTrezeDeMaio',
    demo: 'https://www.youtube.com/watch?v=h1TVhw8w6M8',
    photo: 'public/projects/FotoMuseu.png',
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: ' FRONTEND',
    skills: [
      { name: 'React',      icon: 'react' },
      { name: 'Next.js',    icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind',   icon: 'tailwindcss' },
      { name: 'HTML5',      icon: 'html5' },
    ],
  },
  {
    label: ' BACKEND',
    skills: [
      { name: 'Node.js',  icon: 'nodedotjs' },
      { name: 'Python',   icon: 'python' },
      { name: 'FastAPI',  icon: 'fastapi' },
      { name: 'Prisma',   icon: 'prisma' },
    ],
  },
  {
    label: ' DATABASE',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL',      icon: 'mysql' },
    ],
  },
  {
    label: ' DEVOPS & TOOLS',
    skills: [
      { name: 'Docker',  icon: 'docker' },
      { name: 'Git',     icon: 'git' },
      { name: 'GitHub',  icon: 'github' },
    ],
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'GITHUB',      value: 'github.com/Arruda',      href: 'https://github.com/ViniciusSavianDeArruda' },
  { label: 'LINKEDIN',    value: 'linkedin.com/in/Vinicius', href: 'https://linkedin.com/in/arrudavinicius' },
]

export const ABOUT_ROWS = [
  { label: 'NOME',          value: 'Vinicius Arruda' },
  { label: 'FUNÇÃO',        value: 'Full Stack Developer' },
  { label: 'LOCALIZAÇÃO',   value: 'Brasil 🇧🇷,Rio Grande do Sul - Santa maria ' },
  { label: 'EXPERIÊNCIA',   value: '+1 ano de código' },
  { label: 'STATUS',        value: '✓ Disponível', highlight: true },
  { label: 'ESPECIALIDADE', value: 'Web / BackEnd / Bd' },
]
