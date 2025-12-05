import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useProjectById } from '@/hooks/useProjects';
import { LoadingSpinner, ErrorMessage } from '@/components/common';
import { ProjectHeader, ProjectLinks, ProjectDescription } from '@/components/projects';

interface ProjectDetailModalProps {
  open: boolean;
  projectId: string | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ open, projectId, onClose }) => {
  const { data: project, isLoading, error, refetch } = useProjectById(projectId || undefined);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" aria-labelledby="project-detail-title">
      <DialogTitle id="project-detail-title" sx={{ pr: 6 }}>
        {project ? project.title : 'Project'}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <LoadingSpinner size="large" message="Loading project..." />
          </Box>
        )}
        {error && (
          <ErrorMessage message={error.message} severity="error" onRetry={refetch} sx={{ my: 2 }} />
        )}
        {!isLoading && !error && project && (
          <>
            <ProjectHeader project={project} />
            <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
            {project.description && <ProjectDescription description={project.description} />}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
