import { GET_ALL_PROFILE_DATA, GET_AUTH_TOKEN, LOADER, EDIT_PROFILE, SET_CUSTOMER_ADDRESS } from "./../constant/constants"
import { networkRequest } from "../http/api"
import { api_url, urlConfig } from "../http/apiConfig"

const getAllProfileData = (CustomerId) => {
    return async dispatch => {
        try {
            const data = {
                CustomerId
            }
            const url = `${api_url}${urlConfig.getAllProfileInfo}`;
            const result = await networkRequest({ url, method: "POST", data })
            // if (result.responseCode == 0) {
            dispatch({
                type: GET_ALL_PROFILE_DATA, payload: result
            })
            // }
            dispatch({
                type: LOADER, payload: false
            })
        } catch (error) {
            dispatch({
                type: LOADER, payload: false
            })
            console.warn("error", error);
        }
    }
}
const getAuthToken = () => {
    return async dispatch => {
        try {
            const data = {
                username: "Webotix",
                Password: "SuccessAlways"
            }
            const url = `${api_url}${urlConfig.login}`;
            const result = await networkRequest({ url, method: "POST", data })
            if (result.user) {
                dispatch({
                    type: GET_AUTH_TOKEN, payload: result.user
                })
            }
        } catch (error) {
            console.warn("error", error);
        }
    }
}
const getCustomerAddress = (CustomerId, hideLoader) => {
    return async dispatch => {
        try {
            const data = {
                CustomerId
            }
            const url = `${api_url}${urlConfig.getCustomerAddress}`;
            const result = await networkRequest({ url, method: "POST", data })
            // if (result.user) {
            dispatch({
                type: SET_CUSTOMER_ADDRESS, payload: result
            })
            if (hideLoader) {
                dispatch({
                    type: LOADER, payload: false
                })
            }
            // }
        } catch (error) {
            console.warn("error", error);
        }
    }
}
const openEditProfile = (data) => {
    return dispatch => {
        dispatch({
            type: EDIT_PROFILE, payload: data
        })
    }
}

export default {
    getAllProfileData, getAuthToken, openEditProfile, getCustomerAddress
}