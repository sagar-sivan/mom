import { LOGIN_COMPONENT, PLAN_COMPONENT } from "./../constant/constants"

const initialState = {
    login_component: false,
    plan_component: false
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_COMPONENT:
            return {
                ...state,
                login_component: action.payload
            };
        case PLAN_COMPONENT:
            return {
                ...state,
                plan_component: action.payload
            };
        default:
            return { ...state };
    }
};

export default commonReducer;
