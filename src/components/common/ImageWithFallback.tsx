import React, { useState, ImgHTMLAttributes } from 'react';
import { Box, BoxProps } from '@mui/material';

export interface ImageWithFallbackProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  containerProps?: BoxProps;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * ImageWithFallback Component
 * Display image with error handling and fallback image support
 * Implements progressive fallback strategy: Primary image → Fallback image → Alt text
 * 
 * @param src - Primary image URL
 * @param fallbackSrc - Fallback image URL (optional)
 * @param alt - Accessibility text
 * @param width - Image width (default: 100%)
 * @param height - Image height (default: auto)
 * @param containerProps - MUI Box props for container styling
 * @param onLoad - Callback when image loads successfully
 * @param onError - Callback when image fails to load
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  width = '100%',
  height = 'auto',
  containerProps,
  onLoad,
  onError,
  ...imgProps
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError && fallbackSrc && imageSrc !== fallbackSrc) {
      // Try fallback image
      setImageSrc(fallbackSrc);
    } else {
      // Fallback also failed, show alt text
      setHasError(true);
    }
    onError?.();
  };

  const handleImageLoad = () => {
    setHasError(false);
    onLoad?.();
  };

  return (
    <Box
      {...containerProps}
      sx={{
        display: 'inline-block',
        width,
        height,
        ...containerProps?.sx,
      }}
    >
      {!hasError ? (
        <img
          src={imageSrc}
          alt={alt}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
          {...imgProps}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#666',
            fontSize: '0.875rem',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          {alt}
        </Box>
      )}
    </Box>
  );
};

export default ImageWithFallback;
