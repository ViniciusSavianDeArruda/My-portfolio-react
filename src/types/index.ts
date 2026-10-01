export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  tech: string[];
  type: string;
  github: string;
  demo?: string;
  images: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface ContactLink {
  label: string;
  href: string;
}
