import { FC } from 'react';
import { DateProps } from './date.props';
import { useDateStyles } from './date.styles';
import { useDate } from './use-date';

export const Date: FC<DateProps> = (props) => {
  const { id, label, onChange, value, minDate } = useDate(props);
  const styles = useDateStyles();

  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={id}
        type='datetime-local'
        min={minDate}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
