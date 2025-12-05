import React from 'react';
import { Stack, Button } from '@mui/material';

interface ProjectLinksProps {
  demoUrl?: string;
  githubUrl?: string;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ demoUrl, githubUrl }) => {
  if (!demoUrl && !githubUrl) return null;

  return (
    <Stack direction="row" spacing={2} sx={{ my: 2 }}>
      {demoUrl && (
        <Button
          variant="contained"
          color="primary"
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      )}
      {githubUrl && (
        <Button
          variant="outlined"
          color="inherit"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </Button>
      )}
    </Stack>
  );
};

export default ProjectLinks;
