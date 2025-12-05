import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface VideoModalProps {
  open: boolean;
  title?: string;
  videoUrl: string; // YouTube watch or share URL
  onClose: () => void;
}

// Converts typical YouTube URLs to embeddable src
const toEmbedUrl = (url: string): string => {
  try {
    // youtu.be/<id>
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    // youtube.com/watch?v=<id>
    const u = new URL(url);
    const v = u.searchParams.get('v');
    if (v) return `https://www.youtube.com/embed/${v}`;
    return url;
  } catch {
    return url;
  }
};

export const VideoModal: React.FC<VideoModalProps> = ({ open, title = 'Demo', videoUrl, onClose }) => {
  const src = toEmbedUrl(videoUrl);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" aria-labelledby="video-modal-title">
      <DialogTitle id="video-modal-title" sx={{ pr: 6 }}>
        {title}
        <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            title={title}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
