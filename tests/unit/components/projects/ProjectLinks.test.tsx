import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../setup/test-utils';
import { ProjectLinks } from '@/components/projects';

describe('ProjectLinks', () => {
  it('renders demo and github links with target _blank', () => {
    renderWithProviders(
      <ProjectLinks demoUrl="https://example.com/demo" githubUrl="https://github.com/example" />
    );
    const demo = screen.getByRole('button', { name: /live demo/i });
    const src = screen.getByRole('button', { name: /source code/i });
    expect(demo).toHaveAttribute('target', '_blank');
    expect(src).toHaveAttribute('target', '_blank');
  });
});
