import { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useResetStyles = createUseStyles({
  '@global': {
    '[contenteditable]': {
      border: 'none',
      outline: 'none',
    },
    '*': {
      boxSizing: 'border-box',
    },
    'html, body': {
      padding: 0,
      margin: 0,
      width: '100%',
      height: '100%',
      fontFamily: '"Arial", sans-serif',
      fontSize: '16px',
      overflowX: 'hidden',
    },
    'ul, ol': {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
    },
    button: {
      all: 'unset',
      cursor: 'pointer',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
});

export interface ResetProps {
  children: ReactNode;
}

export const Reset: FC<ResetProps> = ({ children }) => {
  useResetStyles();

  return <>{children}</>;
};
