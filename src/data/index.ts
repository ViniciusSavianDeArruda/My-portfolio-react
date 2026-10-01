import { ContactLink, Project, SkillCategory } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Facilita OAB",
    shortDesc:
      "Companion de estudo para a 1ª fase da OAB, com mentor jurídico via IA, simulados inéditos, caderno de erros e cronograma adaptativo.",
    fullDesc:
      "App full-stack para preparação para o Exame da OAB. Inclui chat com mentor jurídico via IA (Google Gemini) com streaming em tempo real, geração de simulados inéditos com questões no estilo FGV, caderno de erros unificado com status por item e anotações, cronograma adaptativo distribuído por peso FGV, e estatísticas de progresso com gráficos por matéria.",
    highlights: [
      "Chat mentor com streaming SSE em tempo real",
      "Simulados inéditos via structured output do Gemini",
      "Caderno de erros unificado com status e anotações",
      "Cronograma adaptativo por peso FGV",
      "Backend refatorado: 1104 → 112 linhas no main.py",
      "CI/CD com GitHub Actions + deploy automático",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Google Gemini",
    ],
    type: "Projeto pessoal",
    github: "https://github.com/ViniciusSavianDeArruda/facilita-oab-app",
    demo: "https://facilita-oab.vercel.app",
    images: ["/images/projects/facilita-oab.png"],
  },
  {
    id: "02",
    name: "Fitnnes AI",
    shortDesc:
      "Plataforma de gestão de treinos com planos personalizados, acompanhamento de exercícios e sugestões via IA.",
    fullDesc:
      "Plataforma full stack para gerenciamento de treinos com criação de planos, acompanhamento de exercícios e estatísticas de desempenho. O sistema conta com geração de sugestões de treino utilizando IA da OpenAI, além de autenticação segura e arquitetura modular.",
    highlights: [
      "Geração de treinos com IA (OpenAI)",
      "Autenticação segura com JWT",
      "Estatísticas de desempenho",
      "Arquitetura modular full stack",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    type: "Projeto pessoal",
    github: "https://github.com/ViniciusSavianDeArruda/Fitnnes-frontend",
    demo: "https://app.fitnnesapp.online",
    images: ["/images/projects/fitnnes-ai.png"],
  },
  {
    id: "03",
    name: "Museu Treze de Maio",
    shortDesc:
      "Sistema desktop para gestão de biblioteca e acervo histórico, com controle de empréstimos e catalogação.",
    fullDesc:
      "Sistema desktop para gerenciamento completo de biblioteca e acervo histórico. Desenvolvido em Java com JavaFX, SQL Server e arquitetura MVC. Inclui controle de empréstimos, catalogação e auditoria de operações.",
    highlights: [
      "Controle completo de empréstimos",
      "Catalogação de acervo histórico",
      "Auditoria de operações",
      "Arquitetura MVC",
    ],
    tech: ["Java", "JavaFX", "SQL Server", "MVC"],
    type: "Projeto acadêmico",
    github:
      "https://github.com/ViniciusSavianDeArruda/SistemaDeGerenciamentoDeAcervo_MuseuTrezeDeMaio",
    demo: "https://www.youtube.com/watch?v=h1TVhw8w6M8",
    images: ["/images/projects/museu-treze-de-maio.png"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "FRONTEND",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "HTML5", icon: "html5" },
    ],
  },
  {
    label: "BACKEND",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "Fastify", icon: "fastify" },
      { name: "Express", icon: "express" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    label: "DATABASE",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    label: "DEVOPS & TOOLS",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "GITHUB",
    href: "https://github.com/ViniciusSavianDeArruda",
  },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/arrudavinicius",
  },
];
