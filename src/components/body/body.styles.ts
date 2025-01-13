import { createUseStyles, Theme } from 'react-jss';

export const useBodyStyles = createUseStyles((theme: Theme) => ({
  container: {
    fontWeight: 300,
    color: theme.textPrimary,
  },
}));
