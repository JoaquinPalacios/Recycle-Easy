import { SELECT_TIP_CATEGORY } from "../actions/tips.action";
import TipsDataComponent from "../../data/tipsData";

const initialState = {
    list: TipsDataComponent,
    selectedID: null,
};

const CategoryTipReducer = (state = initialState, action: { type: any; categoryID: string; }) => {
    switch (action.type) {
        case SELECT_TIP_CATEGORY:
            return {
                ...state,
                selectedID: action.categoryID,
            };
        default:
            return state;
    };
};

export default CategoryTipReducer;