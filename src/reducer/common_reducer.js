import { LOGIN_COMPONENT } from "./../constant/constants"

const initialState = {
    login_component: false
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_COMPONENT:
            return {
                ...state,
                login_component: action.payload
            };
        default:
            return { ...state };
    }
};

export default commonReducer;
