import { createUseStyles, Theme } from 'react-jss';

export const useSignatureStyles = createUseStyles((theme: Theme) => ({
  container: {
    textAlign: 'left',
    display: 'inline-block',
    maxWidth: '100%',
    color: theme.textPrimary,
    width: '100%',
  },
  title: {
    marginBottom: 0,
    fontSize: '1.3em',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  information: {
    margin: 0,
    fontSize: '0.75em',
    fontStyle: 'italic',
  },
  pad: {
    display: 'block',
    position: 'relative',
    borderRadius: '5px',
    border: `0.2px solid #999`,
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    boxShadow: 'none',
    overflow: 'hidden',
    overflowClipBox: 'unset',
  },
  buttons: {},
  clear: {
    padding: '0.5em 0px',
    background: 'transparent',
    border: `0.2px solid #999`,
    borderTop: 'none',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    fontSize: '1rem',
    borderRadius: '5px',
    textAlign: 'center',
    width: '100%',
  },
}));
