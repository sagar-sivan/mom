import { LOGIN_COMPONENT, PLAN_COMPONENT, SET_CALORIE_PLAN, MENU_COMPONENT } from "./../constant/constants"

const initialState = {
    login_component: false,
    plan_component: false,
    menu_component: false,
    calorie_plan: false
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
        case SET_CALORIE_PLAN:
            return {
                ...state,
                calorie_plan: action.payload
            };
        case MENU_COMPONENT:
            return {
                ...state,
                menu_component: action.payload
            };
        default:
            return { ...state };
    }
};

export default commonReducer;
