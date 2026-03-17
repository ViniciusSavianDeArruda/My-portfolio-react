export interface Project {
  id: string
  name: string
  desc: string
  tech: string[]
  status: string
  statusColor: string
  github: string
  demo?: string
  preview: string   
  url: string       
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

//Projects 
export const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'ProjectAlpha',
    desc: 'Plataforma SaaS full stack com autenticação, dashboard analítico e integração de pagamentos. Arquitetura escalável e deploy automatizado na AWS.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'AWS'],
    status: 'PRODUCTION',
    statusColor: '#00FF41',
    github: '#',
    demo: '#',
    preview: 'https://placehold.co/680x383/060f0a/00FF41?text=ProjectAlpha+%E2%80%94+SaaS+Dashboard&font=monospace',
    url: 'projectalpha.app',
  },
  {
    id: '02',
    name: 'API Gateway',
    desc: 'Microsserviço de gateway com rate limiting, cache Redis e monitoramento em tempo real. Suporta 10k+ requisições/min com latência média abaixo de 12ms.',
    tech: ['Node.js', 'Redis', 'TypeScript', 'Docker', 'Prometheus'],
    status: 'OPEN SOURCE',
    statusColor: '#0088FF',
    github: '#',
    preview: 'https://placehold.co/680x383/060f0a/00FF41?text=API+Gateway+%E2%80%94+10k%2B+req%2Fmin&font=monospace',
    url: 'github.com/seuuser/api-gateway',
  },
  {
    id: '03',
    name: 'DataSync CLI',
    desc: 'Ferramenta CLI para sincronização de bancos de dados entre ambientes de desenvolvimento, staging e produção com rollback automático.',
    tech: ['Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Click'],
    status: 'EM DEV',
    statusColor: '#FFAA00',
    github: '#',
    preview: 'https://placehold.co/680x383/060f0a/00FF41?text=DataSync+CLI+%E2%80%94+Em+Desenvolvimento&font=monospace',
    url: 'github.com/seuuser/datasync',
  },
]

//Skills
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: '// FRONTEND',
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
    label: '// BACKEND',
    skills: [
      { name: 'Node.js',  icon: 'nodedotjs' },
      { name: 'Express',  icon: 'express' },
      { name: 'Python',   icon: 'python' },
      { name: 'FastAPI',  icon: 'fastapi' },
      { name: 'GraphQL',  icon: 'graphql' },
      { name: 'Prisma',   icon: 'prisma' },
    ],
  },
  {
    label: '// DATABASE',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB',    icon: 'mongodb' },
      { name: 'Redis',      icon: 'redis' },
      { name: 'MySQL',      icon: 'mysql' },
      { name: 'SQLite',     icon: 'sqlite' },
      { name: 'Firebase',   icon: 'firebase' },
    ],
  },
  {
    label: '// DEVOPS & TOOLS',
    skills: [
      { name: 'Docker',  icon: 'docker' },
      { name: 'K8s',     icon: 'kubernetes' },
      { name: 'AWS',     icon: 'amazonwebservices' },
      { name: 'Git',     icon: 'git' },
      { name: 'GitHub',  icon: 'github' },
      { name: 'Linux',   icon: 'linux' },
    ],
  },
]

//Contact
export const CONTACT_LINKS: ContactLink[] = [
  { label: 'GITHUB',      value: 'github.com/seuuser',      href: 'https://github.com/seuuser' },
  { label: 'LINKEDIN',    value: 'linkedin.com/in/seuuser', href: 'https://linkedin.com/in/seuuser' },
  { label: 'TWITTER / X', value: '@seuhandle',              href: 'https://twitter.com/seuhandle' },
]

// About table 
export const ABOUT_ROWS = [
  { label: 'NOME',          value: 'Vinicius Arruda' },
  { label: 'FUNÇÃO',        value: 'Full Stack Developer' },
  { label: 'LOCALIZAÇÃO',   value: 'Brasil 🇧🇷,Rio Grande do Sul - Santa maria ' },
  { label: 'EXPERIÊNCIA',   value: '+1 ano de código' },
  { label: 'STATUS',        value: '✓ Disponível', highlight: true },
  { label: 'ESPECIALIDADE', value: 'Web / BackEnd / Bd' },
]
