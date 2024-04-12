import React from 'react';
import {DialogContainer,DialogContent, DialogContentChild, TopPatternDialog} from './Dialog.styled';


type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};


const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <DialogContainer>
      <DialogContent>
        <TopPatternDialog/>
        <DialogContentChild>
        {children}
        <button onClick={onClose}>Close Modal</button>
        </DialogContentChild>
      </DialogContent>
    </DialogContainer>
  );
};

export default Dialog;
