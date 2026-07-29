import { useEffect, useMemo, useState } from 'react';
import { projectTypeLabels, type Project, type ProjectType } from '../data/projects';

interface Props {
  projects: readonly Project[];
}

interface Filters {
  company: string;
  query: string;
  technology: string;
  type: string;
}

const readFilters = (): Filters => {
  if (typeof window === 'undefined') {
    return { company: '', query: '', technology: '', type: '' };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    company: params.get('company') ?? '',
    query: params.get('q') ?? '',
    technology: params.get('technology') ?? '',
    type: params.get('type') ?? '',
  };
};

const updateSearchParams = (filters: Filters): void => {
  const params = new URLSearchParams();

  if (filters.query) params.set('q', filters.query);
  if (filters.company) params.set('company', filters.company);
  if (filters.technology) params.set('technology', filters.technology);
  if (filters.type) params.set('type', filters.type);

  const query = params.toString();
  window.history.replaceState({}, '', query ? `/projects/?${query}` : '/projects/');
};

export default function ProjectArchive({ projects }: Props) {
  const [filters, setFilters] = useState<Filters>(readFilters);
  const [hydrated, setHydrated] = useState(false);
  const companies = [...new Set(projects.map((project) => project.company))];
  const technologies = [...new Set(projects.flatMap((project) => project.technologies))].sort();
  const types = [...new Set(projects.map((project) => project.type))] as ProjectType[];

  useEffect(() => {
    setHydrated(true);
  }, []);

  const filteredProjects = useMemo(() => {
    const searchTerm = filters.query.trim().toLowerCase();

    return projects.filter((project) => {
      const searchableContent = [
        project.title,
        project.company,
        projectTypeLabels[project.type],
        project.summary,
        project.contribution,
        ...project.technologies,
      ]
        .join(' ')
        .toLowerCase();

      return (
        (!searchTerm || searchableContent.includes(searchTerm)) &&
        (!filters.company || project.company === filters.company) &&
        (!filters.technology || project.technologies.includes(filters.technology)) &&
        (!filters.type || project.type === filters.type)
      );
    });
  }, [filters, projects]);

  const setFilter = (nextFilters: Filters): void => {
    setFilters(nextFilters);
    updateSearchParams(nextFilters);
  };

  const clearFilters = (): void => setFilter({ company: '', query: '', technology: '', type: '' });

  return (
    <section aria-labelledby="project-archive-title" data-hydrated={hydrated ? 'true' : 'false'}>
      <div className="archive-heading">
        <div>
          <p className="section-kicker">Project archive</p>
          <h1 id="project-archive-title">Selected work</h1>
        </div>
        <p>{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</p>
      </div>

      <form className="project-filters" onSubmit={(event) => event.preventDefault()}>
        <label>
          <span>Search</span>
          <input
            type="search"
            value={filters.query}
            placeholder="Search projects or technologies"
            onChange={(event) => setFilter({ ...filters, query: event.target.value })}
          />
        </label>
        <label>
          <span>Company</span>
          <select value={filters.company} onChange={(event) => setFilter({ ...filters, company: event.target.value })}>
            <option value="">All companies</option>
            {companies.map((company) => <option key={company}>{company}</option>)}
          </select>
        </label>
        <label>
          <span>Technology</span>
          <select
            value={filters.technology}
            onChange={(event) => setFilter({ ...filters, technology: event.target.value })}
          >
            <option value="">All technologies</option>
            {technologies.map((technology) => <option key={technology}>{technology}</option>)}
          </select>
        </label>
        <label>
          <span>Type</span>
          <select value={filters.type} onChange={(event) => setFilter({ ...filters, type: event.target.value })}>
            <option value="">All types</option>
            {types.map((type) => <option key={type} value={type}>{projectTypeLabels[type]}</option>)}
          </select>
        </label>
        <button type="button" onClick={clearFilters}>Clear filters</button>
      </form>

      <div className="project-archive-list" aria-live="polite">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => {
            const primaryLink = project.links[0];

            return (
              <article className="archive-card" key={project.slug}>
                <div className="archive-card__visual">
                  <img src={project.image.src} alt={project.image.alt} loading="lazy" decoding="async" />
                </div>
                <div>
                  <p className="archive-card__eyebrow">{project.period} · {project.company} · {projectTypeLabels[project.type]}</p>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <p className="archive-card__contribution"><strong>Contribution:</strong> {project.contribution}</p>
                  <ul className="technology-list" aria-label={`Technologies used in ${project.title}`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <a href={primaryLink.href} target="_blank" rel="noreferrer">
                    {primaryLink.label}<span className="external-arrow" aria-hidden="true"> ↗</span>
                  </a>
                </div>
              </article>
            );
          })
        ) : (
          <p className="empty-state">No projects match these filters. Try clearing one or more filters.</p>
        )}
      </div>
    </section>
  );
}
