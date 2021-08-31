import { LOGIN_COMPONENT, PLAN_COMPONENT, SET_CALORIE_PLAN, MENU_COMPONENT } from "./../constant/constants"

const handleLoginComponent = (status) => {
    return dispatch => {
        dispatch({
            type: LOGIN_COMPONENT, payload: status
        })
    }
}
const handlePlanComponent = (status) => {
    return dispatch => {
        dispatch({
            type: PLAN_COMPONENT, payload: status
        })
    }
}
const handleMenuComponent = (status) => {
    return dispatch => {
        dispatch({
            type: MENU_COMPONENT, payload: status
        })
    }
}
const setCaloriePlan = (plan) => {
    return dispatch => {
        dispatch({
            type: SET_CALORIE_PLAN, payload: plan
        })
    }
}

export default {
    handleLoginComponent, handlePlanComponent, setCaloriePlan, handleMenuComponent
}