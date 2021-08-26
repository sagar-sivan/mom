import React from "react"
import axios from "axios";

import { api_url, urlConfig } from "./../http/apiConfig"

let apiRequestID = 1
const networkRequest = async ({ url, method = "GET", data = {}, header = {}, apiID = apiRequestID++ }) => {

    const headerParam = {
        "Content-Type": "application/json",
        ...header
    }
    if (localStorage.getItem("token")) {
        headerParam.Authorization = `Bearer ${localStorage.getItem("token")}`
    }

    const promise = new Promise(async (resolve, reject) => {
        try {
            const request = {
                method: method.toUpperCase(),
                url,
                headers: headerParam,
            }
            if (method.toUpperCase() != "GET") {
                request.data = data;
            }
            const response = await axios(request);
            if (response && response.status === 200) {
                resolve(response.data)
            } else {
                reject(response)
            }
        } catch (error) {
            console.warn(`APIRequestID : ${apiID} CONNECTION FAILED`)
            console.warn(`error : ${error}`)
            reject(error)
        }
    });

    return promise
}


axios.interceptors.response.use(
    response => {
        const promise = new Promise((resolve, reject) => {
            resolve(response);
        });
        return promise;
    },
    async (error) => {
        const apiError = error;
        if (apiError.response && (apiError.response.status === 401)) {
            return refreshApiCall(apiError)

        }
    })


const refreshApiCall = async (apiError) => {
    try {
        const obj = {
            "username": "Webotix",
            "Password": "SuccessAlways"
        }

        const authUrl = `${api_url}${urlConfig.login}`;
        const response = await fetch(authUrl, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            },
        })
        console.log("response", response);
        if (response.status == 200) {
            const authResponse = await response.json();
            console.log("authResponse", authResponse);
            localStorage.setItem("token", authResponse.user.token);
            // localStorage.setItem("refreshToken", authResponse.refresh_token);
            // localStorage.setItem("tokenType", authResponse.token_type);

            apiError.config.headers["Authorization"] = `Bearer ${authResponse.user.token}`
            // apiError.config.baseURL = undefined;
            const newResponse = axios.request(apiError.config);
            return newResponse;

        } else {
            // localStorage.removeItem("accessToken");
            // localStorage.removeItem("refreshToken");
            // localStorage.removeItem("tokenType");
            // localStorage.removeItem("role");
            // window.location = `/${localStorage.getItem("lang")}/login`
        }
    } catch (error) {
        console.warn("ERROR : ", error)
        return error.response
    }
}


export { networkRequest };
