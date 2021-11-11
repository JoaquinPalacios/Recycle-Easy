export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (id: string) => ({
  type: SELECT_CATEGORY,
  categoryID: id,
});