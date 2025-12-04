/**
 * Type Definitions for Portfolio Application
 * Core data models and interfaces used across the application
 */

/**
 * Technology/Skill representation
 */
export interface Technology {
  name: string;
  category?: 'frontend' | 'backend' | 'database' | 'tool' | 'language';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

/**
 * Project artwork/image metadata
 */
export interface ProjectArtwork {
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}

/**
 * Portfolio Project
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  content?: string;
  technologies: Technology[];
  images: ProjectArtwork[];
  thumbnailUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  status?: 'completed' | 'in-progress' | 'archived';
  tags?: string[];
  metrics?: {
    downloads?: number;
    stars?: number;
    users?: number;
    performance?: string;
  };
}

/**
 * Contact information
 */
export interface Contact {
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  location?: string;
}

/**
 * Experience/Work History
 */
export interface Experience {
  id: string;
  title: string;
  company: string;
  description?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  technologies?: Technology[];
  highlights?: string[];
  location?: string;
  type?: 'full-time' | 'part-time' | 'contract' | 'freelance';
}

/**
 * Education
 */
export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  description?: string;
  highlights?: string[];
  location?: string;
}

/**
 * Skills grouped by category
 */
export interface SkillCategory {
  name: string;
  description?: string;
  skills: Technology[];
}

/**
 * Resume Profile
 */
export interface Resume {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  languages?: string[];
  certifications?: {
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }[];
  summary?: string;
}

/**
 * Portfolio Site Configuration/Context
 */
export interface PortfolioConfig {
  title: string;
  description: string;
  author: string;
  theme?: {
    primary?: string;
    secondary?: string;
    dark?: boolean;
  };
  navigation: Array<{
    label: string;
    path: string;
  }>;
  socialLinks?: Contact;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
  timestamp: string;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationMeta;
}
