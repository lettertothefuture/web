import { createUseStyles, Theme } from 'react-jss';

export const useEmailInputStyles = createUseStyles((theme: Theme) => ({
  label: {
    color: theme.textSecondary,
    fontSize: '0.8rem',
    fontStyle: 'italic',
  },
  input: {
    lineHeight: '50px',
    borderRadius: '5px',
    outline: 'none',
    width: '100%',
    padding: '5px 8px',
    fontSize: '1.3rem',
    border: '1px dashed rgba(0, 0, 0, 0.2)',
    color: theme.textPrimary,
  },
  error: {
    color: theme.red,
    display: 'block',
    fontWeight: 'bold',
    margin: '10px 0',
  },
}));
