import { ModalProps } from './modal.props';

export const useModal = (props: ModalProps) => {
  return {
    children: props.children,
    title: props.title,
    onClose: props.onClose,
  };
};
