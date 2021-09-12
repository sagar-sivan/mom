import { LOGIN_COMPONENT, PLAN_COMPONENT, SET_CALORIE_PLAN, MENU_COMPONENT, GET_SETTINGS, COMMON_ALERT, PAYMENT_SUMMARY } from "./../constant/constants"
import { networkRequest } from "../http/api"
import { api_url, urlConfig } from "../http/apiConfig"

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
const handleMenuComponent = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({
            type: MENU_COMPONENT, payload: data
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
const openCommonAlert = (data) => {
    return dispatch => {
        dispatch({
            type: COMMON_ALERT, payload: data
        })
    }
}
const paymentSummaryModal = (data) => {
    return dispatch => {
        dispatch({
            type: PAYMENT_SUMMARY, payload: data
        })
    }
}
const getSettings = () => {
    return async dispatch => {
        try {
            const url = `${api_url}${urlConfig.getAPISettings}`;
            const result = await networkRequest({ url })
            if (result.responseCode == 0) {
                dispatch({
                    type: GET_SETTINGS, payload: result.apiSettingDataDetailsOutputList
                })
            }
        } catch (error) {
            console.warn("error", error);
        }
    }
}

export default {
    handleLoginComponent, handlePlanComponent, setCaloriePlan, handleMenuComponent, getSettings, openCommonAlert, paymentSummaryModal
}