import CategoriesComponent from "../../data/Categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const initialState = {
    list: CategoriesComponent,
    selectedID: null,
};

const CategoryReducer = (state = initialState, action: { type: any; categoryID: string; }) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedID: action.categoryID,
            };
        default:
            return state;
    };
};

export default CategoryReducer;