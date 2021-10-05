import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import RecycleReducer from "./reducers/recycle.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    recycle: RecycleReducer,
    auth: AuthReducer,
    // database: DataBaseReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));