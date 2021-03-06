import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoaderAction from '../../action/loader_action';
import UserAction from '../../action/user_action';
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"

function Login() {

    const dispatch = useDispatch()
    const [loginFormData, setLoginFormData] = useState({})
    const [loginError, setLoginError] = useState({})
    const handleChange = (value, field) => {
        loginFormData[field] = value
        setLoginFormData({ ...loginFormData })
    }
    const handleLoginValidate = () => {
        console.log("s", loginFormData);
        let error = {}
        if (isEmpty(loginFormData.username)) {
            error.username = "Username is required"
        }
        if (isEmpty(loginFormData.password)) {
            error.password = "Password is required"
        }
        return error
    }
    const onLoginSubmit = async (e) => {
        e.preventDefault()
        let loginError = await handleLoginValidate();
        console.log("loginError", loginError);
        if (isEmpty(loginError)) {
            dispatch(LoaderAction.showLoader())
            const data = {
                Username: loginFormData.username,
                Password: loginFormData.password
            }
            console.log(loginFormData);
            const url = `${api_url}${urlConfig.getCustomerInfo}`;
            const result = await networkRequest({ url, method: "POST", data })
            console.log("resultresult", result);
            if (result.responseCode == 0) {
                localStorage.setItem("customerId", result.customerId)
                localStorage.setItem("customerIdTemp", result.customerIdTemp)
                localStorage.setItem("email", result.email)
                dispatch(UserAction.setUserData(result))
                dispatch(CommonAction.handleLoginComponent(false))
            } else {
                loginError.common = result.responseName
                setLoginError({ ...loginError })
            }
        } else {
            setLoginError({ ...loginError })
        }

        dispatch(LoaderAction.hideLoader())
    }
    console.log("loginFormDataloginFormData", loginFormData);
    return (
        <div className="tab-pane fade show active" id="log-modaltab1" role="tabpanel" aria-labelledby="log-modaltab1">
            <form onSubmit={onLoginSubmit}>
                {!isEmpty(loginError.common) && <span className="validation-error">{loginError.common}</span>}
                <div className="form-group">
                    <i className="bi bi-person-fill user-stepmodal"></i>
                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => handleChange(e.target.value, "username")} value={loginFormData.username} />
                    {!isEmpty(loginError.username) && <span className="validation-error">{loginError.username}</span>}
                </div>
                <div className="form-group">
                    <i className="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => handleChange(e.target.value, "password")} value={loginFormData.password} />
                    {!isEmpty(loginError.password) && <span className="validation-error">{loginError.password}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>

                <div className="col-12 ptb-5">
                    <a href="javascript:void(0);" className="btn  link-gray" data-toggle="modal" data-target=".resetpassword">Forgot Password</a>
                </div>
            </form>

        </div>
    )
}

export default Login
