import { Variant } from '@/types';

export interface ModalProps {
  align: 'left' | 'center';
  body: string;
  closeable?: boolean;
  icon?: string;
  title: string;
  variant?: Variant;
  isVisible: boolean;
  action: () => void;
  onClose?: () => void;
}
