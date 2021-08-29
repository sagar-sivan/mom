import { combineReducers } from "redux";

import profileReducer from "./profile_reducer";
import commonReducer from "./common_reducer";
import loaderReducer from "./loader_reducer";
import userReducer from "./user_reducer";
import weeklyReducer from "./weekly_reducer";

export default combineReducers({
    profileReducer, commonReducer, loaderReducer, userReducer, weeklyReducer
});
