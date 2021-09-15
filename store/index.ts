import { combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import RecycleReducer from "./reducers/recycle.action";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    recycle: RecycleReducer,
    auth: AuthReducer,
});

export default createStore(RootReducer);