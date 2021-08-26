import { GET_ALL_PROFILE_DATA } from "./../constant/constants"
import { networkRequest } from "../http/api"
import { api_url, urlConfig } from "../http/apiConfig"

const getAllProfileData = (CustomerId) => {
    return async dispatch => {
        try {
            const data = {
                CustomerId
            }
            // const url = `${api_url}${urlConfig.getAllProfileInfo}`;
            const url = ` http://webotix102-001-site1.gtempurl.com/api/MealsData/GetProfileAllInfo`;
            const result = await networkRequest({ url, method: "POST", data })
            if (result.responseCode == 0) {
                dispatch({
                    type: GET_ALL_PROFILE_DATA, payload: result
                })
            }
        } catch (error) {
            console.warn("error", error);
        }
    }
}

export default {
    getAllProfileData
}