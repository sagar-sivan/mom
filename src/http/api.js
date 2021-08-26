import React from "react"
import axios from "axios";

let apiRequestID = 1
const networkRequest = async ({ url, method = "GET", data = {}, header = {}, apiID = apiRequestID++ }) => {

    const headerParam = {
        "Content-Type": "application/json",
        ...header
    }
    // if (localStorage.getItem("token")) {
    headerParam.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk3Mzg1NTMsImlzcyI6IndlYm90aXguYWUiLCJhdWQiOiJ3ZWJvdGl4LmFlIn0.pjz8RtUzsqfZINkwiywbIFtZ2lp1LGu0emBtjMF5U70`
    // }

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
        if (apiError.response && (apiError.response.status === 403)) {
            // localStorage.removeItem("token");
            // localStorage.removeItem("userId");
            // localStorage.removeItem("roles");
            // window.location = `/login`

        }
    })


export { networkRequest };
