import { GET_WEEKLY_DATA } from "../constant/constants"

const initialState = {
    weeklyData: [],
};

const weeklyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEEKLY_DATA:
            return {
                ...state,
                weeklyData: action.payload
            };
        default:
            return { ...state };
    }
};

export default weeklyReducer;
