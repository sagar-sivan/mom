const base_url = "http://webotix102-001-site1.gtempurl.com"
const api_url = `${base_url}/api/`

const urlConfig = {
    login: "Login",
    getAllProfileInfo: "MealsData/GetProfileAllInfo",
    getCustomerInfo: "MealsData/GetCustomerInfoByUsernameAndPassword",
    getWeeklyPlan: "MealsData/GetWeeklyPlan",
    getPlanData: "MealsData/GetPlanData",
    getCuisineData: "MealsData/GetCuisineDataByPlanId",
    getNoOfMealsData: "MealsData/GetNoOfMealsData",
    getScheduleData: "MealsData/GetScheduleData",
    getDurationData: "MealsData/GetDurationData",
    getAllAllergies: "MealsData/GetAllactiveAllergy",
    saveOrderData: "MealsData/SaveOrderData",
    saveOrderAllergyData: "MealsData/SaveOrderAllergyData",
    createCustomer: "MealsData/CreateCustomer",
}

export {
    urlConfig, base_url, api_url
}