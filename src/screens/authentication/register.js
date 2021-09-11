import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoaderAction from '../../action/loader_action';
import UserAction from '../../action/user_action';
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"
import Countries from "./../../constant/countries.json"

const Register = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [locations, setLocations] = useState([])
    const [error, setError] = useState({})
    useEffect(() => {
        getLocations()
    }, [])
    const getLocations = async () => {
        try {
            dispatch(LoaderAction.showLoader())
            const url = `${api_url}${urlConfig.getLocation}`;
            const result = await networkRequest({ url })
            if (result.responseCode == 0) {
                setLocations(result.apiLocationDetailsOutputList)
            }
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const handleChange = (value, field) => {
        formData[field] = value
        setFormData({ ...formData })
        error[field] = ""
        setError({ ...error })
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
                Email: formData.email,
                DeliveryAreaId: formData.location
            }
            const url = `${api_url}${urlConfig.createCustomer}`;
            const result = await networkRequest({ url, method: "POST", data })
            console.log("resultresult", result);
            if (result.responseCode == 0) {
                localStorage.setItem("customerId", result.customerId)
                localStorage.setItem("customerIdTemp", result.customerIdTemp)
                localStorage.setItem("email", result.email)
                dispatch(UserAction.setUserData(result))
                dispatch(CommonAction.handleLoginComponent(false))
            } else {
                error.common = result.responseName
                setError({ ...error })
            }
        } else {
            setError({ ...error })
        }

        dispatch(LoaderAction.hideLoader())
    }
    return (
        <div className="tab-pane fade" id="reg-modaltab1" role="tabpanel" aria-labelledby="reg-modaltab1">
            <form onSubmit={onSubmit}>
                {!isEmpty(error.common) && <span className="validation-error">{error.common}</span>}
                <div className="form-group">
                    <i className="bi bi-person-fill user-stepmodal"></i>
                    <input type="text" className="form-control" placeholder="First name" onChange={(e) => handleChange(e.target.value, "first_name")} value={formData.first_name} />
                    {!isEmpty(error.first_name) && <span className="validation-error">{error.first_name}</span>}
                </div>
                <div className="form-group">
                    <i className="bi bi-envelope-fill  user-stepmodal"></i>
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => handleChange(e.target.value, "email")} value={formData.email} />
                    {!isEmpty(error.email) && <span className="validation-error">{error.email}</span>}
                </div>
                <div className="form-group">
                    <i className="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile Number" onChange={(e) => handleChange(e.target.value, "mobile")} value={formData.mobile} />
                    {!isEmpty(error.mobile) && <span className="validation-error">{error.mobile}</span>}
                </div>
                <div className="form-group d-flex align-items-center">

                    <div className="py-1 m-1">
                        Location
                    </div>
                    <div className="py-1 w-100">
                        <select className="custom-select " id="inlineFormCustomSelect" onChange={(e) => handleChange(e.target.value, "location")} value={formData.location}>
                            <option selected value="">Choose location</option>
                            {
                                locations.map(item => <option key={item.locationId} value={item.locationId}>{item.locationName}</option>)
                            }
                        </select>
                    </div>
                </div>
                {!isEmpty(error.location) && <span className="validation-error">{error.location}</span>}
                <div className="form-group">
                    <div className=" mt-4">
                        <textarea placeholder="Address" onChange={(e) => handleChange(e.target.value, "address")} value={formData.address} />
                    </div>
                    {!isEmpty(error.address) && <span className="validation-error">{error.address}</span>}
                </div>

                <div className="form-group">
                    <i className="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => handleChange(e.target.value, "password")} value={formData.password} />

                    {!isEmpty(error.password) && <span className="validation-error">{error.password}</span>}
                </div>
                <div className="form-group">
                    <i className="bi bi-shield-fill-check  user-stepmodal"></i>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-Enter Password" onChange={(e) => handleChange(e.target.value, "c_password")} value={formData.c_password} />
                    {!isEmpty(error.c_password) && <span className="validation-error">{error.c_password}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>




        </div>
    )
}

export default Register
