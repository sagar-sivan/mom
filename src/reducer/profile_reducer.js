import { GET_ALL_PROFILE_DATA } from "./../constant/constants"

const initialState = {
    userData: {},
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROFILE_DATA:
            return {
                ...state,
                userData: action.payload
            };
        default:
            return { ...state };
    }
};

export default profileReducer;
