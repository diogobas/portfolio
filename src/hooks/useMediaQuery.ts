import { useMediaQuery as useMediaQueryMui, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';

/**
 * Custom useMediaQuery hook
 * Wrapper around MUI's useMediaQuery for consistent media query usage
 * 
 * @param breakpoint - Material-UI breakpoint (xs, sm, md, lg, xl) or custom query
 * @returns boolean indicating if media query matches
 */
export const useMediaQuery = (breakpoint: Breakpoint | string): boolean => {
  const theme = useTheme();

  // If it's a standard breakpoint, convert to query
  if (['xs', 'sm', 'md', 'lg', 'xl'].includes(breakpoint)) {
    return useMediaQueryMui(theme.breakpoints.up(breakpoint as Breakpoint));
  }

  // Otherwise, assume it's a custom query string (e.g., '(max-width: 600px)')
  return useMediaQueryMui(breakpoint);
};

/**
 * Hook to check if screen is mobile size
 */
export const useIsMobile = (): boolean => {
  const theme = useTheme();
  return useMediaQueryMui(theme.breakpoints.down('sm'));
};

/**
 * Hook to check if screen is tablet size or larger
 */
export const useIsTablet = (): boolean => {
  const theme = useTheme();
  return useMediaQueryMui(theme.breakpoints.up('md'));
};

/**
 * Hook to check if screen is desktop size or larger
 */
export const useIsDesktop = (): boolean => {
  const theme = useTheme();
  return useMediaQueryMui(theme.breakpoints.up('lg'));
};

/**
 * Hook for responsive boolean value
 * Returns different values based on screen size
 * 
 * @param mobileValue - Value when screen is mobile size (down to 'sm')
 * @param desktopValue - Value when screen is desktop size (up from 'md')
 * @returns mobileValue or desktopValue based on current screen size
 */
export const useResponsive = <T,>(mobileValue: T, desktopValue: T): T => {
  const isMobile = useIsMobile();
  return isMobile ? mobileValue : desktopValue;
};

/**
 * Hook for responsive number (for spacing, sizes, etc.)
 */
export const useResponsiveNumber = (mobileValue: number, desktopValue: number): number => {
  return useResponsive(mobileValue, desktopValue);
};

/**
 * Hook for responsive string (for text, values, etc.)
 */
export const useResponsiveString = (mobileValue: string, desktopValue: string): string => {
  return useResponsive(mobileValue, desktopValue);
};
