import { createUseStyles, Theme } from 'react-jss';
import { BookmarkProps } from './bookmark.props';

export const useBookmarkStyles = createUseStyles((theme: Theme) => ({
  button: (props: BookmarkProps) => ({
    width: '190px',
    height: '190px',
    padding: '20px',
    clipPath: `polygon(100% 0%, 0% 100%, 100% 100%)`,
    background: theme.red,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'fixed',
    color: '#FFF',
    zIndex: 1,
    margin: 0,
    right: '0px',
    bottom: '0px',
    cursor: 'pointer',
    transition: '0.5s background ease-in-out, 0.5s border ease-in-out',
    outline: 'none',
    textShadow: '1px 1px rgba(0, 0, 0, 0.9)',
    '&:after': {
      content: `"${props.children}"`,
      position: 'absolute',
      top: '75%',
      left: '75%',
      transform: 'translate(-75%, -75%)',
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '&:hover': {
      background: theme.redHover,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    '&:focus': {
      background: theme.redFocus,
      boxShadow: '0 0 6px 2px rgba(178, 58, 72, 0.8)',
    },
  }),
}));
