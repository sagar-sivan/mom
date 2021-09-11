import { GET_ALL_PROFILE_DATA, GET_AUTH_TOKEN, EDIT_PROFILE, SET_CUSTOMER_ADDRESS } from "./../constant/constants"

const initialState = {
    userData: {},
    authData: {},
    editProfileModal: false,
    customerAddress: []
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
        case EDIT_PROFILE:
            return {
                ...state,
                editProfileModal: action.payload
            };
        case SET_CUSTOMER_ADDRESS:
            return {
                ...state,
                customerAddress: action.payload
            };
        default:
            return { ...state };
    }
};

export default profileReducer;
