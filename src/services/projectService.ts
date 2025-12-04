import { Project, Technology } from '../types';

/**
 * Project Service
 * Handles all project-related data operations
 * Currently uses static fixture data; can be replaced with API calls
 */

// Import fixture data
import projectsFixture from '../tests/fixtures/projects';

class ProjectService {
  /**
   * Get all projects
   */
  async getProjects(): Promise<Project[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return projectsFixture;
  }

  /**
   * Get project by ID
   */
  async getProjectById(id: string): Promise<Project | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return projectsFixture.find(p => p.id === id) || null;
  }

  /**
   * Get featured projects
   */
  async getFeaturedProjects(): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    return projectsFixture.filter(p => p.featured);
  }

  /**
   * Get projects by technology
   */
  async getProjectsByTechnology(technology: string): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    return projectsFixture.filter(p =>
      p.technologies.some(t => t.name.toLowerCase().includes(technology.toLowerCase()))
    );
  }

  /**
   * Get projects by tag
   */
  async getProjectsByTag(tag: string): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    return projectsFixture.filter(p =>
      p.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  /**
   * Get related projects (same technologies or tags)
   */
  async getRelatedProjects(projectId: string, limit: number = 3): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const project = await this.getProjectById(projectId);
    if (!project) return [];

    const related = projectsFixture
      .filter(p => p.id !== projectId)
      .filter(p => {
        const sameTag = p.tags?.some(t => project.tags?.includes(t));
        const sameTech = p.technologies.some(t =>
          project.technologies.some(pt => pt.name === t.name)
        );
        return sameTag || sameTech;
      })
      .slice(0, limit);

    return related;
  }

  /**
   * Get all unique technologies used across projects
   */
  async getAllTechnologies(): Promise<Technology[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const techSet = new Map<string, Technology>();
    
    projectsFixture.forEach(project => {
      project.technologies.forEach(tech => {
        if (!techSet.has(tech.name)) {
          techSet.set(tech.name, tech);
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
    return projectsFixture.filter(p =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.shortDescription?.toLowerCase().includes(lowerQuery) ||
      p.tags?.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }

  /**
   * Get projects grouped by status
   */
  async getProjectsByStatus(status: 'completed' | 'in-progress' | 'archived'): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 250));
    return projectsFixture.filter(p => p.status === status);
  }
}

// Export singleton instance
export const projectService = new ProjectService();
export default projectService;
