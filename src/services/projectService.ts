import { Project, Technology, ProjectArtwork } from '../types';

/**
 * Project Service
 * Handles all project-related data operations
 * Currently uses static fixture data; can be replaced with API calls
 */

// Import fixture data (dev-time fixtures)
import { mockProjects } from '../../tests/fixtures/projects';

// Local thumbnail overrides (served from /public)
const externalThumbs: Record<string, string> = {
  'classcraft': '/images/projects/classcraft.jpg',
  'session-organizer': '/images/projects/SessionOrganizer.png',
  'coachly': '/images/projects/coachly.png',
  'teacher-pathways': '/images/projects/teacherPathway2.png',
};

// External reference/demo links per project
const externalLinks: Record<string, string> = {
  'classcraft': 'https://www.hmhco.com/programs/classcraft#hmh-into-reading--classcraft-tabs-default-1',
  'session-organizer': 'https://www.hmhco.com/programs/classcraft#hmh-into-reading--classcraft-tabs-default-1',
  'coachly': 'https://www.hmhco.com/programs/coachly',
  'teacher-pathways': 'https://neonbytes.ca/elibaldo/#HMHtsp',
};

// Map test fixtures (simple shape) to internal Project type
const mapFixtureToProject = (p: any): Project => {
  const overrideThumb = externalThumbs[p.id as string];
  const baseThumb = overrideThumb || p.imageUrl || p.artwork?.filename;
  const images: ProjectArtwork[] = baseThumb ? [{ url: baseThumb }] : [];
  const technologies: Technology[] = Array.isArray(p.technologies)
    ? p.technologies.map((name: string) => ({ name }))
    : [];
  return {
    id: p.id,
    title: p.name || p.title || 'Untitled',
    description: p.description || p.brief || '',
    shortDescription: p.brief,
    technologies,
    images,
    thumbnailUrl: baseThumb,
    demoUrl: externalLinks[p.id as string] || p.demoUrl,
    githubUrl: p.githubUrl,
    featured: !!p.featured,
    tags: p.tags || [],
  } as Project;
};

class ProjectService {
  /**
   * Get all projects
   */
  async getProjects(): Promise<Project[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProjects.map(mapFixtureToProject);
  }

  /**
   * Get project by ID
   */
  async getProjectById(id: string): Promise<Project | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const found = mockProjects.find((p: any) => p.id === id);
    return found ? mapFixtureToProject(found) : null;
  }

  /**
   * Get featured projects
   */
  async getFeaturedProjects(): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    return mockProjects.filter((p: any) => p.featured).map(mapFixtureToProject);
  }

  /**
   * Get projects by technology
   */
  async getProjectsByTechnology(technology: string): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    const tech = technology.toLowerCase();
    return mockProjects
      .filter((p: any) => p.technologies?.some((t: string) => t.toLowerCase().includes(tech)))
      .map(mapFixtureToProject);
  }

  /**
   * Get projects by tag
   */
  async getProjectsByTag(tag: string): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    const tg = tag.toLowerCase();
    return mockProjects
      .filter((p: any) => p.tags?.some((t: string) => t.toLowerCase() === tg))
      .map(mapFixtureToProject);
  }

  /**
   * Get related projects (same technologies or tags)
   */
  async getRelatedProjects(projectId: string, limit: number = 3): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const project = await this.getProjectById(projectId);
    if (!project) return [];

    const related = mockProjects
      .filter((p: any) => p.id !== projectId)
      .filter((p: any) => {
        const sameTag = p.tags?.some((t: string) => project.tags?.includes(t));
        const sameTech = p.technologies?.some((t: string) =>
          project.technologies.some((pt) => pt.name === t)
        );
        return sameTag || sameTech;
      })
      .slice(0, limit)
      .map(mapFixtureToProject);

    return related;
  }

  /**
   * Get all unique technologies used across projects
   */
  async getAllTechnologies(): Promise<Technology[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const techSet = new Map<string, Technology>();
    
    mockProjects.forEach((project: any) => {
      (project.technologies || []).forEach((name: string) => {
        if (!techSet.has(name)) {
          techSet.set(name, { name });
        }
      });
    });

    return Array.from(techSet.values());
  }

  /**
   * Search projects by title or description
   */
  async searchProjects(query: string): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const lowerQuery = query.toLowerCase();
    return mockProjects
      .filter((p: any) =>
        (p.name || '').toLowerCase().includes(lowerQuery) ||
        (p.description || '').toLowerCase().includes(lowerQuery) ||
        (p.brief || '').toLowerCase().includes(lowerQuery) ||
        p.tags?.some((t: string) => t.toLowerCase().includes(lowerQuery))
      )
      .map(mapFixtureToProject);
  }

  /**
   * Get projects grouped by status
   */
  async getProjectsByStatus(status: 'completed' | 'in-progress' | 'archived'): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    return mockProjects
      .filter((p: any) => p.status === status)
      .map(mapFixtureToProject);
  }
}

// Export singleton instance
export const projectService = new ProjectService();
export default projectService;
