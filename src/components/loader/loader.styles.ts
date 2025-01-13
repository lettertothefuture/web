import { createUseStyles } from 'react-jss';

export const useLoaderStyles = createUseStyles({
  '@keyframes move': {
    '0%': {
      left: 0,
      opacity: 0,
    },
    '35%': {
      left: '41%',
      transform: 'rotate(0deg)',
      opacity: 1,
    },
    '65%': {
      left: '59%',
      transform: 'rotate(0deg)',
      opacity: 1,
    },
    '100%': {
      left: '100%',
      transform: 'rotate(-180deg)',
      opacity: 0,
    },
  },
  root: {
    height: '100vh',
    width: '100vw',
    transition: 'opacity .25s ease, visibility linear .35s',
    overflow: 'auto',
    margin: 0,
    padding: 0,
    display: 'block',
  },
  center: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '36px',
    left: '50%',
    top: '40%',
    marginLeft: '-300px',
    overflow: 'visible',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
  },
  word: {
    position: 'absolute',
    width: '20px',
    height: '36px',
    opacity: 0,
    animation: '$move 2s linear infinite',
    transform: 'rotate(180deg)',
  },
});
