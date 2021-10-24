import { FILTER_TIP } from "../actions/tipsDescription.action";
import TipsDataDescriptionComponent from "../../data/tipsDataDescription";

const initialState = {
    list: TipsDataDescriptionComponent,
    filteredTips: [],
}

const TipsReducer = (state = initialState, action: { type: any; tipID: string; categoryID: string; }) => {
    switch(action.type) {
        case FILTER_TIP:
            return {
                ...state,
                filteredTips: state.list.filter(item => item.category === action.categoryID)
            };
        default:
            return state;   
    };
};
export default TipsReducer;