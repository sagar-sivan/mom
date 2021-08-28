import { LOADER } from "./../constant/constants"

const initialState = {
    loading: false
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return { ...state };
    }
};

export default loaderReducer;
