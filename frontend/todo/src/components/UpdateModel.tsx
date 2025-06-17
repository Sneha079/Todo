// components/UpdateModal.tsx
import React from 'react';
import { Backdrop, ModalCard, CloseButton } from './UpdateModal.styles';

interface UpdateModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ onClose, children }) => {
  return (
    <Backdrop onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>Cancel</CloseButton>
      </ModalCard>
    </Backdrop>
  );
};

export default UpdateModal;
