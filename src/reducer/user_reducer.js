import { USER_DATA } from "../constant/constants"

const initialState = {
    loginData: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                loginData: action.payload
            };
        default:
            return { ...state };
    }
};

export default userReducer;
