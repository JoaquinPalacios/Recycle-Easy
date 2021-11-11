import { FILTER_RECYCLE, SELECT_RECYCLE } from "../actions/recycle.action";

import PlasticTypesComponent from "../../data/PlasticTypes";

const initialState = {
    list: PlasticTypesComponent,
    filteredRecycle: [],
    selectedID: null,
};

const RecycleReducer = (state = initialState, action: { type: any; recycleID: string; categoryID: string; }) => {
    switch(action.type) {
        case SELECT_RECYCLE:
            return {
                ...state,
                selectedID: action.recycleID,
            };
        case FILTER_RECYCLE:
            return {
                ...state,
                filteredRecycle: state.list.filter(item => item.category === action.categoryID)
            };
        default:
            return state;
    };
};

export default RecycleReducer;