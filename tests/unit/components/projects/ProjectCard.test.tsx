import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../setup/test-utils';
import { ProjectCard } from '@/components/projects';
import { Project } from '@/types';

const makeProject = (overrides: Partial<Project> = {}): Project => ({
  id: 'p1',
  title: 'Test Project',
  description: 'Long description',
  shortDescription: 'Short',
  technologies: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'MUI' }],
  images: [{ url: 'https://example.com/img.jpg' }],
  thumbnailUrl: 'https://example.com/thumb.jpg',
  demoUrl: 'https://example.com',
  githubUrl: 'https://github.com/example',
  status: 'completed',
  ...overrides,
});

describe('ProjectCard', () => {
  it('renders title and short description', () => {
    renderWithProviders(<ProjectCard project={makeProject()} />);
    expect(screen.getByRole('button', { name: /project: test project/i })).toBeInTheDocument();
    expect(screen.getByText(/short/i)).toBeInTheDocument();
  });

  it('calls onCardClick when clicked', () => {
    const onCardClick = jest.fn();
    renderWithProviders(<ProjectCard project={makeProject()} onCardClick={onCardClick} />);
    fireEvent.click(screen.getByRole('button', { name: /project: test project/i }));
    expect(onCardClick).toHaveBeenCalledWith('p1');
  });
});
