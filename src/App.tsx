import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './theme';
import { Layout } from './components/layout';
import { ErrorBoundary } from './components/common';

// Create TanStack Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

/**
 * App Component
 * Root component for the portfolio application
 * Wraps with providers: Theme, Query Client, Error Boundary
 */
function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <CssBaseline />
            <Layout title="Diogo Bastos" subtitle="Full-Stack Developer & Design Enthusiast">
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
                    This portfolio showcases my work as a full-stack developer with expertise in
                    React, TypeScript, Material-UI, and modern web technologies. Currently, I'm
                    building scalable applications and exploring innovative solutions to complex
                    problems.
                  </Typography>
                </Box>
              </Container>
            </Layout>
          </ErrorBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
