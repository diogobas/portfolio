import React from 'react';
import { Container, Box, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjectById } from '@/hooks/useProjects';
import { LoadingSpinner, ErrorMessage, PageContainer } from '@/components/common';
import { ProjectHeader, ProjectLinks, ProjectDescription, RelatedProjects } from '@/components/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: project, isLoading, error, refetch } = useProjectById(id);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <LoadingSpinner size="large" message="Loading project..." />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <ErrorMessage message={error.message} severity="error" onRetry={refetch} sx={{ my: 4 }} />
      </Container>
    );
  }

  if (!project) {
    return (
      <Container maxWidth="sm">
        <ErrorMessage message="Project not found" severity="warning" onRetry={() => navigate('/projects')} sx={{ my: 4 }} />
      </Container>
    );
  }

  return (
    <PageContainer maxWidth="lg" title={project.title}>
      <Box sx={{ mb: 2 }}>
        <Button variant="text" color="primary" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </Box>
      <ProjectHeader project={project} />
      <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
      {project.description && <ProjectDescription description={project.description} />}
      {/* Related projects */}
      <Box sx={{ mt: 6 }}>
        <RelatedProjects projectId={project.id} onProjectClick={(pid) => navigate(`/project/${pid}`)} />
      </Box>
    </PageContainer>
  );
};

export default ProjectDetailPage;
