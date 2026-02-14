
import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  icon: string;
  image?: string; 
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ContactLink {
  name: string;
  href: string;
  icon: string;
  label: string;
}
