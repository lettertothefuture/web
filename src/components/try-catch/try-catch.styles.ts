import { createUseStyles } from 'react-jss';

export const useTryCatchStyles = createUseStyles((_) => ({
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    margin: 0,
    padding: 0,
    display: 'block',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
  title: {},
  information: {},
  button: {},
}));
