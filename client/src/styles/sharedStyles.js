import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

// Fade in animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Slide in animation
export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Page container with background
export const PageContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  position: 'relative',
  border: '2px solid #c4a77d', // for debugging, can be removed later
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // lighter overlay for visibility
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

// Content wrapper with animation
export const ContentWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  animation: `${fadeIn} 0.8s ease-out`,
  padding: theme.spacing(4),
}));

// Background images
export const backgroundImages = {
  home: 'https://images.unsplash.com/photo-1588668219995-d3fcd414d9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  products: 'https://images.unsplash.com/photo-1588668219995-d3fcd414d9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1588668219995-d3fcd414d9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  faq: 'https://images.unsplash.com/photo-1588668219995-d3fcd414d9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  cart: 'https://images.unsplash.com/photo-1588668219995-d3fcd414d9a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
}; 