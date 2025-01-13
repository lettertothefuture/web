import { FormEvent, useCallback, useMemo, useState } from 'react';
import { useID } from '../../hooks';
import { DateProps, UseDateResult } from './date.props';

export const useDate = (props: DateProps): UseDateResult => {
  const { getNewIdWith } = useID();
  const [date, setDate] = useState(new Date());

  const id = useMemo(() => getNewIdWith(props.label), [getNewIdWith, props]);

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
    value: date.toISOString().slice(0, 16),
  };
};
