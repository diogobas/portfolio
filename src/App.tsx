import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './theme';
import { Layout } from './components/layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
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
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </Layout>
          </ErrorBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
