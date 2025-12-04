import { Resume, Experience, Education, SkillCategory, Technology } from '../types';

/**
 * Resume Service
 * Handles all resume/profile-related data operations
 * Currently uses static fixture data; can be replaced with API calls
 */

// Import fixture data
import resumeFixture from '../tests/fixtures/resume';

class ResumeService {
  /**
   * Get full resume profile
   */
  async getResume(): Promise<Resume> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return resumeFixture;
  }

  /**
   * Get resume summary section
   */
  async getResumeProfile() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return {
      name: resumeFixture.name,
      title: resumeFixture.title,
      bio: resumeFixture.bio,
      avatar: resumeFixture.avatar,
    };
  }

  /**
   * Get all work experiences
   */
  async getExperience(): Promise<Experience[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return resumeFixture.experience;
  }

  /**
   * Get current/most recent experience
   */
  async getCurrentExperience(): Promise<Experience | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const current = resumeFixture.experience.find(e => e.current);
    return current || resumeFixture.experience[0] || null;
  }

  /**
   * Get education entries
   */
  async getEducation(): Promise<Education[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return resumeFixture.education;
  }

  /**
   * Get all skills grouped by category
   */
  async getSkills(): Promise<SkillCategory[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return resumeFixture.skills;
  }

  /**
   * Get skills for specific category
   */
  async getSkillsByCategory(category: string): Promise<Technology[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const skillCategory = resumeFixture.skills.find(
      s => s.name.toLowerCase() === category.toLowerCase()
    );
    return skillCategory?.skills || [];
  }

  /**
   * Get all technologies/languages used
   */
  async getAllTechnologies(): Promise<Technology[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const techSet = new Map<string, Technology>();
    
    // Collect from skills
    resumeFixture.skills.forEach(category => {
      category.skills.forEach(tech => {
        if (!techSet.has(tech.name)) {
          techSet.set(tech.name, tech);
        }
      });
    });

    // Collect from experience
    resumeFixture.experience.forEach(exp => {
      exp.technologies?.forEach(tech => {
        if (!techSet.has(tech.name)) {
          techSet.set(tech.name, tech);
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
    return resumeFixture.contact;
  }

  /**
   * Get social links for contact/sharing
   */
  async getSocialLinks() {
    await new Promise(resolve => setTimeout(resolve, 150));
    const { github, linkedin, twitter, email } = resumeFixture.contact;
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
    return resumeFixture.certifications || [];
  }

  /**
   * Get languages spoken
   */
  async getLanguages() {
    await new Promise(resolve => setTimeout(resolve, 150));
    return resumeFixture.languages || [];
  }

  /**
   * Get timeline data (years of experience, major milestones)
   */
  async getTimeline() {
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const startYear = Math.min(
      ...resumeFixture.experience.map(e => parseInt(e.startDate.split('-')[0])),
      ...resumeFixture.education.map(e => parseInt(e.graduationDate.split('-')[0]))
    );
    
    const endYear = new Date().getFullYear();
    const yearsOfExperience = endYear - startYear;

    return {
      yearsOfExperience,
      startYear,
      currentYear: endYear,
      milestones: [
        ...resumeFixture.education.map(e => ({
          year: parseInt(e.graduationDate.split('-')[0]),
          title: `${e.degree} in ${e.field}`,
          type: 'education',
        })),
        ...resumeFixture.experience.map(e => ({
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
