import { useCallback } from 'react';
import { ID, UseIDResult } from './use-id-types';

export const useID = (): UseIDResult => {
  const getNewId = useCallback(
    () => (new Date().getTime() / 1000).toFixed(0).toString() as ID,
    [],
  );

  const getNewIdWith = useCallback(
    (identifier?: string): ID =>
      identifier ? (`${identifier}-${getNewId()}` as ID) : getNewId(),
    [getNewId],
  );

  const decodeIdIntoDate = useCallback((id: ID) => new Date(+id * 1000), []);

  return {
    getNewId,
    getNewIdWith,
    decodeIdIntoDate,
  };
};
