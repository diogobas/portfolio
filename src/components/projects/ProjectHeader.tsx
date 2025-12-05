import React from 'react';
import { Box, Typography } from '@mui/material';
import { Project } from '@/types';
import { ImageWithFallback } from '@/components/common';

interface ProjectHeaderProps {
  project: Project;
  showArtwork?: boolean;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, showArtwork = true }) => {
  const imageUrl = project.images?.[0]?.url || project.thumbnailUrl;

  return (
    <Box component="header" sx={{ mb: 3 }} aria-label={`Project header: ${project.title}`}>
      <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
        {project.title}
      </Typography>
      {project.status && (
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          {project.status === 'in-progress' ? 'In Progress' : project.status === 'completed' ? 'Completed' : 'Archived'}
        </Typography>
      )}
      {showArtwork && imageUrl && (
        <Box sx={{ position: 'relative', width: '100%', borderRadius: 2, overflow: 'hidden', bgcolor: 'action.hover' }}>
          <ImageWithFallback
            src={imageUrl}
            alt={project.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProjectHeader;
