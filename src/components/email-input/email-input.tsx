import { FC, Fragment } from 'react';
import { EmailInputProps } from './email-input.props';
import { useEmailInputStyles } from './email-input.styles';
import { useEmailInput } from './use-email-input';

export const EmailInput: FC<EmailInputProps> = (props) => {
  const styles = useEmailInputStyles();
  const { id, label, value, onChange, error } = useEmailInput(props);

  return (
    <Fragment>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type='email'
        value={value}
        onChange={onChange}
        placeholder='example@example.com'
      />
      <small className={styles.error}>{error}</small>
    </Fragment>
  );
};
