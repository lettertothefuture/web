import { createUseStyles, Theme } from 'react-jss';

export const useTitleStyles = createUseStyles((theme: Theme) => ({
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
    border: 'none',
    color: theme.textPrimary,
    marginTop: 0,
    padding: 0,
    paddingTop: '1.67em',
  },
}));
