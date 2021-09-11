import React, { useState } from 'react'
import { isEmpty } from "lodash"
import { useSelector, useDispatch } from 'react-redux'

import LoaderAction from '../../action/loader_action';
import { urlConfig, api_url } from "../../http/apiConfig"
import { networkRequest } from "../../http/api"

const BannerForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})

    const handleChange = (value, field) => {
        formData[field] = value;
        setFormData({ ...formData })
        error[field] = ""
        setError({ ...error })
    }
    const handleValidate = () => {
        let error = {}
        if (isEmpty(formData.first_name)) {
            error.first_name = "First name is required"
        }
        if (isEmpty(formData.last_name)) {
            error.last_name = "Last name is required"
        }
        if (isEmpty(formData.email)) {
            error.email = "Email is required"
        }
        if (isEmpty(formData.phone_number)) {
            error.phone_number = "Phone number is required"
        }
        return error
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let error = await handleValidate()
        if (isEmpty(error)) {
            try {
                dispatch(LoaderAction.showLoader())
                const data = {
                    FirstName: formData.first_name,
                    LastName: formData.last_name,
                    Email: formData.email,
                    Phone: formData.phone_number
                }
                const url = `${api_url}${urlConfig.createLeed}`;
                const result = await networkRequest({ url, method: "POST", data })
                console.log("res", result);
                if (result.responseCode == 0) {
                    setFormData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone_number: ""
                    })
                    setError({})
                } else {
                    error.common = result.responseName
                    setError({ ...error })
                }
                dispatch(LoaderAction.hideLoader())
            } catch (error) {
                dispatch(LoaderAction.hideLoader())
                console.log(error);
            }
        } else {
            setError({ ...error })
        }
    }
    return (
        <div className="banner__form">
            <form onSubmit={handleSubmit}>
                {!isEmpty(error.common) && <span className="validation-error">{error.common}</span>}
                <div className="form-group">
                    <input placeholder="First Name" type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "first_name")} value={formData.first_name} />
                    {!isEmpty(error.first_name) && <span className="validation-error">{error.first_name}</span>}
                </div>
                <div className="form-group">
                    <input placeholder="Last Name" type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "last_name")} value={formData.last_name} />
                    {!isEmpty(error.last_name) && <span className="validation-error">{error.last_name}</span>}
                </div>
                <div className="form-group">
                    <input placeholder="Email" type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "email")} value={formData.email} />
                    {!isEmpty(error.email) && <span className="validation-error">{error.email}</span>}
                </div>
                <div className="form-group">
                    <input placeholder="Phone Number" type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "phone_number")} value={formData.phone_number} />
                    {!isEmpty(error.phone_number) && <span className="validation-error">{error.phone_number}</span>}
                </div>
                <button className="btn btn__started" href="#" role="button">Get Started</button>
            </form>
        </div>
    )
}

export default BannerForm
