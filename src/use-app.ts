/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { addDays, format } from 'date-fns';
import { useSendLetter } from './hooks/use-send-letter';

export const useApp = () => {
  const { execute, isLoading, isError, error, isSuccess } = useSendLetter();
  const [title, onTitleChange] = useState(
    'Oi eu do futuro ... só queria dizer que ... ',
  );
  const [letter, onLetterChange] = useState('.............');
  const [date, onDateChange] = useState(addDays(new Date(), 1));
  const [send, setSend] = useState(false);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [sendDisabled, setSendDisabled] = useState(true);
  const [signature, onSignatureWrote] = useState('');

  const onClickSend = useCallback(() => {
    setSend(true);
  }, [setSend]);

  const onCloseSend = useCallback(() => {
    setSend(false);
  }, [setSend]);

  const onSend = useCallback(() => {
    execute({
      title,
      body: letter,
      date,
      signature,
      to: email || '',
    });
  }, [title, letter, date, signature, email, execute]);

  const onEmailChange = useCallback((email: string, isError: boolean) => {
    setEmail(email);
    setSendDisabled(isError);
  }, []);

  useEffect(() => {
    if (isError) {
      throw new Error(error as any);
    }

    if (isSuccess) {
      location.reload();
    }
  }, [isError, error, isSuccess]);

  return {
    title,
    letter,
    date,
    onTitleChange,
    onLetterChange,
    onDateChange,
    onClickSend,
    onCloseSend,
    onSend,
    send,
    email,
    onEmailChange,
    onSignatureWrote,
    sendDisabled,
    isLoading,
    dateFormated: `${format(date, 'EEEEEE')}, ${format(date, 'dd')} de ${format(date, 'LLL')}/${format(date, 'yy')}`,
  };
};
