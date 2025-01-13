import { createUseStyles, Theme } from 'react-jss';

export const usePaperStyles = createUseStyles((theme: Theme) => ({
  paper: {
    height: '100%',
    width: '100vw',
    overflow: 'auto',
    paddingBottom: '30px',
    backgroundImage: theme.paper,
    backgroundSize: `1px 1px, 1px 1px, 1px 50px, 1px 30px`,
    backgroundPosition: `90%, 10%, 0 0, 0px 43px`,
    backgroundRepeat: 'repeat-y, repeat-y, repeat-x, repeat',
    lineHeight: `35px`,
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  content: {
    marginLeft: '13.5%',
    width: '75%',
    height: '100%',
  },
}));
