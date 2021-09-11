import { ADD_ADDRESS } from "../constant/constants"

const openAddAddress = (data) => {
    return dispatch => {
        dispatch({
            type: ADD_ADDRESS, payload: data
        })
    }
}

export default {
    openAddAddress
}