import { FC } from 'react';
import { ButtonProps } from './button.props';
import { useButtonStyles } from './button.styles';
import { useButton } from './use-button';

export const Button: FC<ButtonProps> = (props) => {
  const styles = useButtonStyles();
  const { label, onClick, disabled } = useButton(props);

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={styles.button}
    >
      <b>{label}</b>
    </button>
  );
};
