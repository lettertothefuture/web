import { useMutation } from '@tanstack/react-query';
import { SendLetter } from './send-letter.type';
import { useMemo } from 'react';
import { CurrentEnvironment } from '../../environment';

export const useSendLetter = () => {
  const headers = useMemo(() => {
    const value = new Headers();
    value.append('Content-Type', 'application/json');
    return value;
  }, []);

  const { isSuccess, isError, mutate, isPending, error } = useMutation({
    mutationFn: async (data: SendLetter) =>
      fetch(`${CurrentEnvironment.api}/letter`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
      }),
  });

  return {
    execute: mutate,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  };
};
