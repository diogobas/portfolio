import React from 'react';
import { Chip, ChipProps } from '@mui/material';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps extends Omit<ChipProps, 'variant' | 'color'> {
  variant?: BadgeVariant;
  size?: 'small' | 'medium';
  icon?: React.ReactNode;
}

/**
 * Badge Component
 * Reusable badge/tag component using MUI Chip
 * Displays labels with optional colors and icons
 * 
 * @param label - Badge text content
 * @param variant - Color variant (primary, secondary, success, warning, error, info)
 * @param size - Badge size (small or medium)
 * @param icon - Optional icon to display
 * @param ...rest - Additional Chip props
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  ...rest
}) => {
  const getVariantColor = (v: BadgeVariant): ChipProps['color'] => {
    const colorMap: Record<BadgeVariant, ChipProps['color']> = {
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      warning: 'warning',
      error: 'error',
      info: 'info',
    };
    return colorMap[v];
  };

  const sizeProps = size === 'small' ? { size: 'small' as const } : {};

  return (
    <Chip
      label={label}
      color={getVariantColor(variant)}
      variant="filled"
      icon={icon}
      {...sizeProps}
      {...rest}
    />
  );
};

export default Badge;
