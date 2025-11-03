
export interface PortfolioData {
  profile: Profile;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillEntry[];
  settings: Settings;
}

export interface Profile {
  title: string;
  subtitle: string;
  summary: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  achievements: string[]; // ¡Clave para las métricas!
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tags: string[]; // Píldoras de tecnología
  imageUrl: string; // Usar placehold.co para los mocks
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillEntry {
  id: string;
  name: string;
  category: 'Backend/Data' | 'Frontend' | 'Infra/DevOps' | 'AI/Automation';
  level: number; // 0-100 (para la barra de progreso)
}

export interface Settings {
  theme: 'dark' | 'light';
}
