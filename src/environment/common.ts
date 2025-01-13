import { Common } from './types';

export const CommonEnvironment = {
  isDev: import.meta.env.DEV,
} satisfies Common;
