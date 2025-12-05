import { Resume, Experience, Education, SkillCategory, Technology } from '../types';

/**
 * Resume Service
 * Handles all resume/profile-related data operations
 * Currently uses static fixture data; can be replaced with API calls
 */

// Import fixture data (dev-time fixtures)
import { mockResume } from '../../tests/fixtures/resume';

class ResumeService {
  /**
   * Get full resume profile
   */
  async getResume(): Promise<Resume> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockResume as unknown as Resume;
  }

  /**
   * Get resume summary section
   */
  async getResumeProfile() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return {
      name: (mockResume as any).profile?.name,
      title: (mockResume as any).profile?.title,
      bio: (mockResume as any).profile?.summary,
      avatar: (mockResume as any).profile?.avatar,
    };
  }

  /**
   * Get all work experiences
   */
  async getExperience(): Promise<Experience[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return (mockResume as any).experience as Experience[];
  }

  /**
   * Get current/most recent experience
   */
  async getCurrentExperience(): Promise<Experience | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const exp = (mockResume as any).experience as any[];
    const current = exp.find(e => e.current);
    return (current || exp[0] || null) as any;
  }

  /**
   * Get education entries
   */
  async getEducation(): Promise<Education[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return (mockResume as any).education as Education[];
  }

  /**
   * Get all skills grouped by category
   */
  async getSkills(): Promise<SkillCategory[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const skills = (mockResume as any).skills?.map((s: any) => ({
      name: s.category,
      skills: (s.skills || []).map((name: string) => ({ name }))
    })) as any;
    return skills as SkillCategory[];
  }

  /**
   * Get skills for specific category
   */
  async getSkillsByCategory(category: string): Promise<Technology[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const skills = (mockResume as any).skills as any[];
    const skillCategory = skills.find(
      (s) => (s.category || '').toLowerCase() === category.toLowerCase()
    );
    return (skillCategory?.skills || []).map((name: string) => ({ name })) as Technology[];
  }

  /**
   * Get all technologies/languages used
   */
  async getAllTechnologies(): Promise<Technology[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const techSet = new Map<string, Technology>();
    
    // Collect from skills
    (mockResume as any).skills.forEach((category: any) => {
      category.skills.forEach((name: string) => {
        if (!techSet.has(name)) {
          techSet.set(name, { name });
        }
      });
    });

    // Collect from experience
    (mockResume as any).experience.forEach((exp: any) => {
      (exp.technologies || []).forEach((name: string) => {
        if (!techSet.has(name)) {
          techSet.set(name, { name });
        }
      });
    });

    return Array.from(techSet.values());
  }

  /**
   * Get contact information
   */
  async getContact() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return (mockResume as any).contact;
  }

  /**
   * Get social links for contact/sharing
   */
  async getSocialLinks() {
    await new Promise(resolve => setTimeout(resolve, 150));
    const { github, linkedin, twitter, email } = (mockResume as any).contact || {};
    return {
      github: github ? { url: github, label: 'GitHub' } : null,
      linkedin: linkedin ? { url: linkedin, label: 'LinkedIn' } : null,
      twitter: twitter ? { url: twitter, label: 'Twitter' } : null,
      email: email ? { url: `mailto:${email}`, label: 'Email' } : null,
    };
  }

  /**
   * Get certifications
   */
  async getCertifications() {
    await new Promise(resolve => setTimeout(resolve, 150));
    return (mockResume as any).certifications || [];
  }

  /**
   * Get languages spoken
   */
  async getLanguages() {
    await new Promise(resolve => setTimeout(resolve, 150));
    return (mockResume as any).languages || [];
  }

  /**
   * Get timeline data (years of experience, major milestones)
   */
  async getTimeline() {
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const exp = (mockResume as any).experience as any[];
    const edu = (mockResume as any).education as any[];
    const startYear = Math.min(
      ...exp.map(e => parseInt((e.startDate || '0').split('-')[0])),
      ...edu.map(e => parseInt((e.graduationDate || e.year || '0').split('-')[0]))
    );
    
    const endYear = new Date().getFullYear();
    const yearsOfExperience = endYear - startYear;

    return {
      yearsOfExperience,
      startYear,
      currentYear: endYear,
      milestones: [
        ...edu.map((e: any) => ({
          year: parseInt((e.graduationDate || e.year).split('-')[0]),
          title: `${e.degree} in ${e.field || e.degree}`,
          type: 'education',
        })),
        ...exp.map((e: any) => ({
          year: parseInt(e.startDate.split('-')[0]),
          title: `${e.title} at ${e.company}`,
          type: 'experience',
        })),
      ].sort((a, b) => b.year - a.year),
    };
  }
}

// Export singleton instance
export const resumeService = new ResumeService();
export default resumeService;
