import merge from 'lodash/merge';

import { CommonEnvironment } from './common';
import { Development } from './development';
import { Production } from './production';

export const CurrentEnvironment = merge(
  CommonEnvironment,
  import.meta.env.DEV ? Development : Production,
);

export type { Common, Environment } from './types';
