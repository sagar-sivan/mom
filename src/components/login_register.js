import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../action/common_action';
import LoaderAction from '../action/loader_action';
import UserAction from '../action/user_action';
import { networkRequest } from "../http/api"
import { api_url, urlConfig } from "../http/apiConfig"
import Register from './register';

const LoginRegister = () => {

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
    return (
        <>
            <nav class="nav login-form-modal" id="pills-tab" role="tablist">
                <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#log-modaltab1" role="tab" aria-controls="log-modaltab1" aria-selected="true">
                    Login
                </a>
                <a class="nav-link" id="nav-result-tab" data-toggle="tab" href="#reg-modaltab1" role="tab" aria-controls="reg-modaltab1" aria-selected="false">
                    Register
                </a>
            </nav>
            <div class="tab-content login-form-content text-left py-4">
                <div class="tab-pane fade show active" id="log-modaltab1" role="tabpanel" aria-labelledby="log-modaltab1">
                    <form onSubmit={onLoginSubmit}>
                        <div class="form-group">
                            <i class="bi bi-person-fill user-stepmodal"></i>
                            <input type="text" class="form-control" placeholder="First name" onChange={(e) => handleChange(e.target.value, "username")} value={loginFormData.username} />
                            {!isEmpty(loginError.username) && <span className="validation-error">{loginError.username}</span>}
                        </div>
                        <div class="form-group">
                            <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                            <input type="password" class="form-control" placeholder="Password" onChange={(e) => handleChange(e.target.value, "password")} value={loginFormData.password} />
                            {!isEmpty(loginError.password) && <span className="validation-error">{loginError.password}</span>}
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>

                        <div class="col-12 ptb-5">
                            <a href="javascript:void(0);" class="btn  link-gray" data-toggle="modal" data-target=".resetpassword">Forgot Password</a>
                        </div>
                    </form>

                </div>
                <Register />
            </div>
        </>
    )
}

export default LoginRegister
