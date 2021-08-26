import { LOGIN_COMPONENT } from "./../constant/constants"

const handleLoginComponent = (status) => {
    return dispatch => {
        dispatch({
            type: LOGIN_COMPONENT, payload: status
        })
    }
}

export default {
    handleLoginComponent
}