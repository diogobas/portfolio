import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: '4rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Explore my projects, experience, and skills below.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto' }}
        >
          This portfolio showcases my work as a full-stack developer with expertise in React,
          TypeScript, Material-UI, and modern web technologies. Currently, I'm building scalable
          applications and exploring innovative solutions to complex problems.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
