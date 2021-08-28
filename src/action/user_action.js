import { USER_DATA } from "../constant/constants"

const setUserData = (data) => {
    return dispatch => {
        dispatch({
            type: USER_DATA, payload: data
        })
    }
}

export default {
    setUserData
}