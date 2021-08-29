import { LOGIN_COMPONENT, PLAN_COMPONENT } from "./../constant/constants"

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

export default {
    handleLoginComponent, handlePlanComponent
}