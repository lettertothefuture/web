import { createUseStyles, Theme } from 'react-jss';

export const useDateStyles = createUseStyles((theme: Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0px',
  },
  input: {
    border: 'none',
    color: theme.textPrimary,
  },
  label: {
    color: theme.textPrimary,
    fontWeight: '700',
  },
}));
