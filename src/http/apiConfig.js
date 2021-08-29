const base_url = "http://webotix102-001-site1.gtempurl.com"
const api_url = `${base_url}/api/`

const urlConfig = {
    login: "Login",
    getAllProfileInfo: "MealsData/GetProfileAllInfo",
    getCustomerInfo: "MealsData/GetCustomerInfoByUsernameAndPassword",
    getWeeklyPlan: "MealsData/GetWeeklyPlan",
}

export {
    urlConfig, base_url, api_url
}