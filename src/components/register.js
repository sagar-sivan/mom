import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../action/common_action';
import LoaderAction from '../action/loader_action';
import UserAction from '../action/user_action';
import { networkRequest } from "../http/api"
import { api_url, urlConfig } from "../http/apiConfig"

const Register = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    const handleChange = (value, field) => {
        formData[field] = value
        setFormData({ ...formData })
    }
    const handleValidate = () => {
        console.log("s", formData);
        let error = {}
        if (isEmpty(formData.first_name)) {
            error.first_name = "First name is required"
        }
        if (isEmpty(formData.email)) {
            error.email = "Email is required"
        }
        if (isEmpty(formData.mobile)) {
            error.mobile = "Mobile is required"
        }
        if (isEmpty(formData.location)) {
            error.location = "Location is required"
        }
        if (isEmpty(formData.address)) {
            error.address = "Address is required"
        }
        if (isEmpty(formData.password)) {
            error.password = "Password is required"
        }
        if (isEmpty(formData.c_password)) {
            error.c_password = "Confirm password is required"
        }
        if (!isEmpty(formData.password) && !isEmpty(formData.c_password) && formData.password != formData.c_password) {
            error.c_password = "Password mismatch"
        }
        return error
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        let error = await handleValidate();
        console.log("loginError", error);
        if (isEmpty(error)) {
            dispatch(LoaderAction.showLoader())
            const data = {
                Username: formData.email,
                Password: formData.password,
                FirstName: formData.first_name,
                MiddleName: "test",
                LastName: "test",
                Address1: formData.address,
                Phone: formData.mobile,
                Email: formData.email
            }
            const url = `${api_url}${urlConfig.createCustomer}`;
            const result = await networkRequest({ url, method: "POST", data })
            console.log("resultresult", result);
            if (result.responseCode == 0) {
                // localStorage.setItem("customerId", result.customerId)
                // dispatch(UserAction.setUserData(result))
                // dispatch(CommonAction.handleLoginComponent(false))
            } else {
                // loginError.common = result.responseName
                // setLoginError({ ...loginError })
            }
        } else {
            setError({ ...error })
        }

        dispatch(LoaderAction.hideLoader())
    }
    return (
        <div class="tab-pane fade" id="reg-modaltab1" role="tabpanel" aria-labelledby="reg-modaltab1">
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <i class="bi bi-person-fill user-stepmodal"></i>
                    <input type="text" class="form-control" placeholder="First name" onChange={(e) => handleChange(e.target.value, "first_name")} value={formData.first_name} />
                </div>
                <div class="form-group">
                    <i class="bi bi-envelope-fill  user-stepmodal"></i>
                    <input type="email" class="form-control" placeholder="Email" onChange={(e) => handleChange(e.target.value, "email")} value={formData.email} />
                </div>
                <div class="form-group">
                    <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile Number" onChange={(e) => handleChange(e.target.value, "mobile")} value={formData.mobile} />
                </div>
                <div class="form-group d-flex align-items-center">

                    <div class="py-1 m-1">
                        Location
                    </div>
                    <div class="py-1 w-100">
                        <select class="custom-select " id="inlineFormCustomSelect" onChange={(e) => handleChange(e.target.value, "location")} value={formData.location}>
                            <option selected="">Choose..</option>
                            <option value="1">Al Barsha</option>
                            <option value="2">Marina</option>
                            <option value="2">Jumeira</option>
                            <option value="2">JLT</option>
                            <option value="2">Umm Suquim </option>
                            <option value="2">Karama</option>
                        </select>
                    </div>

                </div>
                <div class="form-group">
                    <div class=" mt-4">
                        <textarea placeholder="Address" onChange={(e) => handleChange(e.target.value, "address")} value={formData.address} />
                    </div>
                </div>

                <div class="form-group">
                    <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => handleChange(e.target.value, "password")} value={formData.password} />
                </div>
                <div class="form-group">
                    <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Re-Enter Password" onChange={(e) => handleChange(e.target.value, "c_password")} value={formData.c_password} />
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>




        </div>
    )
}

export default Register
