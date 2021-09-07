export const SELECT_RECYCLE = 'SELECT_RECYCLE';
export const FILTER_RECYCLE = 'FILTER_RECYCLE';

export const selectRecycle = (recycleID: string) => ({
  type: SELECT_RECYCLE,
  recycleID,
});

export const filteredRecycle = (categoryID: string) => ({
  type: FILTER_RECYCLE,
  categoryID,
})