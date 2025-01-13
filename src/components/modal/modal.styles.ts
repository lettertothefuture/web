import { createUseStyles, Theme } from 'react-jss';
import { ModalProps } from './modal.props';

export const useModalStyles = createUseStyles((theme: Theme) => ({
  modal: (props: ModalProps) => ({
    display: 'flex',
    visibility: props.opened ? 'visible' : 'hidden',
    transition: 'opacity .25s ease, visibility linear .35s',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'fixed',
    zIndex: 50,
    padding: '30px',
    opacity: props.opened ? 1 : 0,
    background: theme.whiteBackground,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '15px',
  }),
  block: {
    width: '50px',
    height: '50px',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  close: {
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    padding: '10px',
    border: '1.5px solid transparent',
    transition: '5s border, border-color, linear',
    borderRadius: '20px',
    '&:hover': {
      border: '1.5px solid #555',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
}));
