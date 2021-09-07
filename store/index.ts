import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import RecycleReducer from "./reducers/recycle.action";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    recycle: RecycleReducer,
});

export default createStore(RootReducer);