/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { SendLetter } from './send-letter.type';
// import { useMemo } from 'react';
//import { CurrentEnvironment } from "../../environment";

export const useSendLetter = () => {
  // const headers = useMemo(() => {
  //   const value = new Headers();
  //   value.append('Content-Type', 'application/json');
  //   return value;
  // }, []);

  const { isSuccess, isError, mutate, isPending, error } = useMutation({
    mutationFn: async (_: SendLetter) => {
      await new Promise((_: any, reject: any) =>
        setTimeout(() => reject(new Error('API Em desenvolvimento')), 2000),
      );
    },
  });

  return {
    execute: mutate,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  };
};
