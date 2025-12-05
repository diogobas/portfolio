import { renderWithProviders } from '../../setup/test-utils';
import { ProjectHeader } from '@/components/projects';
import { Project } from '@/types';

const makeProject = (overrides: Partial<Project> = {}): Project => ({
  id: 'p1',
  title: 'Test Project',
  description: 'Long description',
  shortDescription: 'Short',
  technologies: [{ name: 'React' }],
  images: [{ url: 'https://example.com/img.jpg' }],
  ...overrides,
});

describe('ProjectHeader', () => {
  it('renders project title and image', () => {
    const { getByText } = renderWithProviders(<ProjectHeader project={makeProject()} />);
    expect(getByText(/test project/i)).toBeInTheDocument();
  });
});
