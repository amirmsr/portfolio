// components/ImageModal.tsx
import React from 'react';
import { Modal, Box } from '@mui/material';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="image-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          outline: 'none',
        }}
      >
        <img
          src={imageUrl}
          alt=""
          style={{
            maxHeight: '90vh',
            maxWidth: '90vw',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImageModal;