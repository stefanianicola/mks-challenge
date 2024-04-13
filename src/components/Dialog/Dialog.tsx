import React from 'react';
import {DialogClose, DialogContainer,DialogContent, DialogContentChild, DialogTopPattern} from './Dialog.styled';
import { primaryColor } from '../../shared/Variables.styled';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};


const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <DialogContainer>
      <DialogContent  >
      <DialogTopPattern/>
        <DialogContentChild>
       {children}
       <DialogClose onClick={onClose}>
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
        <path d="M13.5 4.5L4.5 13.5" stroke={primaryColor.toggleOff} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 4.5L13.5 13.5" stroke={primaryColor.toggleOff}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
       </DialogClose>
        </DialogContentChild>
      </DialogContent>
    </DialogContainer>
  );
};

export default Dialog;
