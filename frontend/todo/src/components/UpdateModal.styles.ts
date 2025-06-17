// components/styles/UpdateModal.styles.ts
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
    height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

export const UpdateInput = styled.div
