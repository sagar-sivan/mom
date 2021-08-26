import { combineReducers } from "redux";

import profileReducer from "./profile_reducer";
import commonReducer from "./common_reducer";

export default combineReducers({
    profileReducer, commonReducer
});
