import { GET_WEEKLY_DATA, LOADER } from "../constant/constants"
import { networkRequest } from "../http/api"
import { api_url, urlConfig } from "../http/apiConfig"

const getWeeklyData = (CustomerId) => {
    return async dispatch => {
        try {
            const url = `${api_url}${urlConfig.getWeeklyPlan}`;
            const result = await networkRequest({ url, method: "POST" })
            if (result.responseCode == 0) {
                dispatch({
                    type: GET_WEEKLY_DATA, payload: result.weeklyMenuPlanOutputList
                })
            }
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

export default {
    getWeeklyData
}