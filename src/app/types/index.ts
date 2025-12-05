export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
  highlights?: string[];
}

export interface Project {
  id?: string;
  name: string;
  image: string;
  demo?: string;
  tags: string[];
  summary?: string;
  about?: string;
  stacks?: string[];
  website?: string;
  github?: string;
  design?: string;
}

export interface SocialLink {
  icon: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  specialization: string;
  location: string;
  avatar: string;
}

export interface EducationItem {
  date: string;
  title: string;
  source: string;
  sourceLink: string;
  description: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  companyLink: string;
  rating: number;
  comment: string;
  avatar: string;
  projectLink: string;
}

export interface Achievement {
  number: string;
  description: string;
}

export interface Service {
  title: string;
  tags: string[];
  description: string;
  image: string;
}
