import { FC } from 'react';
import { ModalProps } from './modal.props';
import { createPortal } from 'react-dom';
import { useModalStyles } from './modal.styles';
import { useModal } from './use-modal';
import CloseIcon from '../../assets/close.svg';

export const Modal: FC<ModalProps> = (props) => {
  const styles = useModalStyles(props);
  const { children, title, onClose } = useModal(props);

  return (
    <>
      {createPortal(
        <aside className={styles.modal}>
          <div className={styles.titleContainer}>
            <div className={styles.block}></div>
            <h2 className={styles.title}>
              <b>{title}</b>
            </h2>
            <img
              onClick={onClose}
              src={CloseIcon}
              alt='close'
              className={styles.close}
            />
          </div>
          <div>{children}</div>
          <div></div>
        </aside>,
        document.body,
      )}
    </>
  );
};
