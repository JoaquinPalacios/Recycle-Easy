export const FILTER_TIP = 'FILTER_TIP';

export const filterTips = (categoryID: string) => ({
    type: FILTER_TIP,
    categoryID,
});