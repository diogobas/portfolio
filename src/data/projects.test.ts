import { describe, expect, it } from 'vitest';
import { featuredProjects, projects } from './projects';

describe('project content', () => {
  it('contains the six public projects in the archive', () => {
    expect(projects).toHaveLength(6);
  });

  it('keeps five projects featured on the home page', () => {
    expect(featuredProjects).toHaveLength(5);
  });

  it('provides a secure public link for every project', () => {
    expect(projects.every((project) => project.links.every((link) => link.href.startsWith('https://')))).toBe(true);
  });
});
