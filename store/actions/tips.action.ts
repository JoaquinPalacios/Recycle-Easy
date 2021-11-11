export const SELECT_TIP_CATEGORY = 'SELECT_TIP_CATEGORY';

export const selectTipCategory = (id: string) => ({
  type: SELECT_TIP_CATEGORY,
  categoryID: id,
});