import { FormEvent, useCallback, useMemo, useState } from 'react';
import { EmailInputProps } from './email-input.props';
import { useID } from '../../hooks';

export const useEmailInput = (props: EmailInputProps) => {
  const { getNewId } = useID();
  const id = useMemo(() => getNewId(), [getNewId]);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const str = event.currentTarget.value;

      if (
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str) === false
      ) {
        setError('Informe um email válido!!!');
      } else {
        setError(undefined);
      }

      if (props.onChange) {
        props.onChange(
          str,
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str) ===
            false,
        );
      }
    },
    [props],
  );

  return {
    id,
    label: props.label,
    value: props.value,
    error,
    onChange,
  };
};
