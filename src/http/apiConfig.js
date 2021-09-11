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
    getCouponById: "MealsData/GetCouponById",
    getAPISettings: "MealsData/GetAPISettings",
    initiatePayment: "MealsData/InitiatePayment",
    getLocation: "MealsData/GetAllactiveLocation",
    updatePaymentStatus: "MealsData/UpdatePaymentStatus",
    getWeeklyPlanByCustomerPlanAndCuisineId: "MealsData/GetWeeklyPlanByCustomerPlanandCuisineId",
    createLeed: "MealsData/CreateLeed",
    getCustomerAddress: "MealsData/GetCustomerAddress",
    processPayment: "Payment/ProcessPayment",
    createCustomerAddress: "MealsData/CreateCustomerAddress",
    updateProfile: "MealsData/UpdateProfile",
    sendEmail: "MealsData/SendEmail",
    updateCustomerMenu: "MealsData/UpdateCustomerMenu",
}

export {
    urlConfig, base_url, api_url
}