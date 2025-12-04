import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

/**
 * App Component
 * Root component for the portfolio application
 */
function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <h1>Portfolio App</h1>
        <p>Initializing...</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
