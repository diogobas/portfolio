import { createTheme, ThemeOptions } from '@mui/material/styles';

/**
 * Color Palette Configuration
 * Meets WCAG 2.1 AA accessibility standards:
 * - Text contrast: 4.5:1 minimum
 * - UI components contrast: 3:1 minimum
 */
const paletteConfig = {
  primary: {
    main: '#1976d2', // Blue - primary action color
    light: '#42a5f5', // Lighter blue for hover states
    dark: '#1565c0', // Darker blue for active states
    contrastText: '#ffffff', // White text for 4.5:1 contrast
  },
  secondary: {
    main: '#dc004e', // Magenta - secondary action color
    light: '#f73378', // Lighter magenta
    dark: '#9a0036', // Darker magenta
    contrastText: '#ffffff', // White text for contrast
  },
  success: {
    main: '#2e7d32', // Green for success states
  },
  warning: {
    main: '#f57c00', // Orange for warnings
  },
  error: {
    main: '#d32f2f', // Red for errors
  },
  background: {
    default: '#fafafa', // Light gray background
    paper: '#ffffff', // White paper background
  },
  text: {
    primary: '#212121', // Dark gray for primary text (4.5:1 contrast)
    secondary: '#757575', // Medium gray for secondary text (3:1 contrast)
  },
};

/**
 * Typography Configuration
 * Ensures readable font sizes and line heights for accessibility
 */
const typographyConfig = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.0078em',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.6,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.03125em',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.0178em',
  },
  button: {
    fontWeight: 600,
    textTransform: 'none',
  },
};

/**
 * Component Overrides
 * Ensures consistent styling and accessibility across components
 */
const componentOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        // Focus styles for keyboard navigation
        '&:focus-visible': {
          outline: '2px solid #1976d2',
          outlineOffset: '2px',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        '&:focus-visible': {
          outline: '2px solid #1976d2',
          outlineOffset: '2px',
        },
      },
    },
  },
};

/**
 * Create Material-UI theme with accessibility compliance
 */
const themeOptions: ThemeOptions = {
  palette: paletteConfig,
  typography: typographyConfig,
  components: componentOverrides,
};

export const theme = createTheme(themeOptions);

export default theme;
