import { FormEvent, useCallback, useMemo, useState } from 'react';
import { useID } from '../../hooks';
import { DateProps, UseDateResult } from './date.props';
import { addDays, startOfDay } from 'date-fns';

export const useDate = (props: DateProps): UseDateResult => {
  const { getNewIdWith } = useID();
  const [date, setDate] = useState(props.value);
  const id = useMemo(() => getNewIdWith(props.label), [getNewIdWith, props]);
  const minDate = useMemo(
    () => addDays(startOfDay(new Date()), 1).toISOString().slice(0, -8),
    [],
  );

  const onChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const input = new Date(event.currentTarget.value);

      setDate(input);

      if (props.onChange) {
        props.onChange(input);
      }
    },
    [props],
  );

  return {
    id,
    ...props,
    onChange,
    minDate,
    value: date.toISOString().slice(0, 16),
  };
};
