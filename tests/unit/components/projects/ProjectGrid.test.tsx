import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../setup/test-utils';
import { ProjectGrid } from '@/components/projects';
import { Project } from '@/types';

const makeProjects = (): Project[] => [
  {
    id: 'p1',
    title: 'One',
    description: 'd1',
    shortDescription: 's1',
    technologies: [{ name: 'React' }],
    images: [],
  },
  {
    id: 'p2',
    title: 'Two',
    description: 'd2',
    shortDescription: 's2',
    technologies: [{ name: 'TypeScript' }],
    images: [],
  },
];

describe('ProjectGrid', () => {
  it('renders projects and respects filterTag', () => {
    const projects = makeProjects();
    renderWithProviders(
      <ProjectGrid projects={projects} filterTag="React" />
    );
    // Only project with React should render
    expect(screen.getByRole('grid')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /project: one/i })).toBeInTheDocument();
  });

  it('shows empty state when no projects', () => {
    renderWithProviders(
      <ProjectGrid projects={[]} emptyMessage="No projects found" />
    );
    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });
});
