/* eslint-disable @typescript-eslint/no-explicit-any */
import { Classes } from 'jss';
import { ReactNode } from 'react';

export interface TryCatchProps {
  children: ReactNode;
  style: Classes<'root' | 'container' | 'title' | 'information' | 'button'>;
}

export interface TryCatchState {
  hasError: boolean;
  error?: any | undefined;
}
