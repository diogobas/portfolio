import { describe, expect, it } from 'vitest';
import { featuredProjects, projects } from './projects';
import { projectImages } from './project-images';

describe('project content', () => {
  it('contains professional and confirmed personal projects in the archive', () => {
    expect(projects).toHaveLength(11);
    expect(projects.filter((project) => project.type === 'personal')).toHaveLength(5);
  });

  it('keeps personal projects in the archive only', () => {
    expect(featuredProjects.every((project) => project.type === 'professional')).toBe(true);
  });

  it('provides a secure public link for every project', () => {
    expect(
      projects.every((project) => project.links.every((link) => link.href.startsWith('https://')))
    ).toBe(true);
  });

  it('keeps approved screenshots descriptive and fallback artwork decorative', () => {
    expect(Object.keys(projectImages)).toHaveLength(projects.length);
    expect(
      Object.values(projectImages).every((image) =>
        image.status === 'approved'
          ? !image.decorative && image.alt.length > 0
          : image.decorative && image.alt === ''
      )
    ).toBe(true);
  });
});
