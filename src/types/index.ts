export interface Project {
  id: string;
  name: string;
  desc: string;
  tech: string[];
  status: string;
  statusColor: string;
  github: string;
  demo?: string;
  photo: string;
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
  value: string;
  href: string;
}

export interface AboutRow {
  label: string;
  value: string;
  highlight?: boolean;
  dot?: "amber" | "blue";
}
