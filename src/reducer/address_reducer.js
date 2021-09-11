import { ADD_ADDRESS } from "../constant/constants"

const initialState = {
    addAddressModal: false
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                addAddressModal: action.payload
            };
        default:
            return { ...state };
    }
};

export default addressReducer;
