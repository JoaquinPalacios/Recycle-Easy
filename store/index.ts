import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import CategoryTipReducer from "./reducers/tips.reducer";
import RecycleReducer from "./reducers/recycle.reducer";
import TipsReducer from "./reducers/tipsDescription.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    recycle: RecycleReducer,
    auth: AuthReducer,
    tipsCategories: CategoryTipReducer,
    tips: TipsReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));