import { createUseStyles, Theme } from 'react-jss';

export const useButtonStyles = createUseStyles((theme: Theme) => ({
  button: {
    background: 'transparent',
    border: `1px dashed ${theme.red}`,
    padding: '25px 0px',
    marginTop: '10px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '5px',
    cursor: 'pointer',
    color: theme.red,
    transition: 'color, .5s border, .8s background ease',
    '&:hover': {
      borderStyle: 'solid',
      background: theme.redWithTransparency,
      borderColor: theme.redWithTransparency,
      color: '#FFF',
    },
    '&:disabled': {
      borderStyle: 'solid',
      borderColor: 'rgba(50, 50, 50, 0.05)',
      background: 'rgba(50, 50, 50, 0.05)',
      color: 'rgba(0, 0, 0, 0.1)',
    },
  },
}));
