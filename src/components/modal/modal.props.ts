import { ReactNode } from 'react';

export interface ModalProps {
  opened: boolean;
  children: ReactNode;
  onClose?: () => void;
  title: string;
}
