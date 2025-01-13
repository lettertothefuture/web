import { FormEvent } from 'react';

export interface DateProps {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
}

export interface UseDateResult extends Omit<DateProps, 'onChange' | 'value'> {
  id: string;
  value: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
}
