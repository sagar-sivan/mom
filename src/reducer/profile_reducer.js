import { GET_ALL_PROFILE_DATA, GET_AUTH_TOKEN } from "./../constant/constants"

const initialState = {
    userData: {},
    authData: {}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROFILE_DATA:
            return {
                ...state,
                userData: action.payload
            };
        case GET_AUTH_TOKEN:
            return {
                ...state,
                authData: action.payload
            };
        default:
            return { ...state };
    }
};

export default profileReducer;
