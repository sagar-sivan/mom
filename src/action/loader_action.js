import { LOADER } from "./../constant/constants"

const showLoader = () => {
    return dispatch => {
        dispatch({
            type: LOADER, payload: true
        })
    }
}
const hideLoader = () => {
    return dispatch => {
        dispatch({
            type: LOADER, payload: false
        })
    }
}

export default {
    showLoader, hideLoader
}