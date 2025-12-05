import React from 'react';
import { Typography } from '@mui/material';

interface ProjectDescriptionProps {
  description: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => {
  return (
    <Typography component="section" variant="body1" sx={{ lineHeight: 1.8 }}>
      {description}
    </Typography>
  );
};

export default ProjectDescription;
