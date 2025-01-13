export type ID = string;

export interface UseIDResult {
  getNewId: () => ID;
  getNewIdWith: (identifier?: string) => ID;
  decodeIdIntoDate: (id: ID) => Date;
}
