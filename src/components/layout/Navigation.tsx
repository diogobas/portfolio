import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface NavigationLink {
  label: string;
  path: string;
}

interface NavigationProps {
  links: NavigationLink[];
  onLinkClick?: (path: string) => void;
}

/**
 * Navigation Component
 * Responsive navigation with mobile drawer and desktop menu
 * @param links - Array of navigation links
 * @param onLinkClick - Callback when a link is clicked
 */
export const Navigation: React.FC<NavigationProps> = ({ links, onLinkClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (path: string) => {
    setDrawerOpen(false);
    onLinkClick?.(path);
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationContent = (
    <List sx={{ width: '100%' }}>
      {links.map((link) => (
        <ListItem key={link.path} disablePadding>
          <ListItemButton
            href={link.path}
            selected={isActive(link.path)}
            onClick={() => handleLinkClick(link.path)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: theme.palette.action.selected,
                borderLeft: `4px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            <ListItemText primary={link.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <nav aria-label="main navigation">
      {isMobile ? (
        <>
          <IconButton
            aria-label="open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: 'primary.main', marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 250, padding: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                <IconButton aria-label="close menu" onClick={() => setDrawerOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              {navigationContent}
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: 1, marginLeft: 'auto' }}>{navigationContent}</Box>
      )}
    </nav>
  );
};

export default Navigation;
