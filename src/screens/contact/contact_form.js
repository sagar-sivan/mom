import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoaderAction from '../../action/loader_action';
import UserAction from '../../action/user_action';
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"
import { emailValidate } from "./../../constant/common"
import { ab_red_box_absolute3, ab_red_box_absolute4, ab_red_box_absolute2, ab_red_box_absolute1 } from "./../../assets/images"

const ContactForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})

    const handleChange = (value, field) => {
        formData[field] = value
        error[field] = ""
        setFormData({ ...formData })
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
        if (!isEmpty(formData.email) && !emailValidate.test(formData.email)) {
            error.email = "Invalid email address"
        }
        if (isEmpty(formData.country)) {
            error.country = "Country is required"
        }
        if (isEmpty(formData.message)) {
            error.message = "Message is required"
        }
        return error
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let error = await handleValidate();
            if (isEmpty(error)) {
                dispatch(LoaderAction.showLoader())
                await handleCreateLeed()
                const data = {
                    MailType: "C",
                    Email: formData.email,
                    FirstName: formData.first_name,
                    LastName: formData.last_name,
                    MailSubject: "Contact form request",
                    Country: formData.country,
                    Message: formData.message
                }
                const url = `${api_url}${urlConfig.sendEmail}`;
                const result = await networkRequest({ url, method: "POST", data })
                console.log("resultresult", result);
                if (result.responseCode == 0) {
                    setFormData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        country: "",
                        message: ""
                    })
                    setError({})
                } else {
                    error.common = result.responseName
                    setError({ ...error })
                }
                dispatch(LoaderAction.hideLoader())
            } else {
                setError({ ...error })
                dispatch(LoaderAction.hideLoader())
            }
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const handleCreateLeed = async (e) => {
        try {
            const data = {
                FirstName: formData.first_name,
                LastName: formData.last_name,
                Email: formData.email,
                Country: formData.country,
                Message: formData.message
            }
            const url = `${api_url}${urlConfig.createLeed}`;
            const result = await networkRequest({ url, method: "POST", data })
            console.log("res", result);
            if (result.responseCode == 0) {

            } else {
                error.common = result.responseName
                setError({ ...error })
            }
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    return (
        <div className="col-md-12 col-sm-12 col-lg-12 contact-page py-5">
            <div className="skew-bg__grey__top" data-aos="fade-up">

                <div className="row m-3 m-sm-2">
                    <div className="col-md-12 col-12 contact-form-ab-mom">
                        <div className="red-box-absolute-img">
                            <img className="red-absoluteimg3" data-aos="fade-up-right" src={ab_red_box_absolute3} />
                            <img className="red-absoluteimg4" data-aos="fade-up-right" src={ab_red_box_absolute4} />
                        </div>

                        <form onSubmit={handleSubmit} className="col-md-6 float-left" data-aos="fade-up">
                            {!isEmpty(error.common) && <span className="validation-error">{error.common}</span>}
                            <div className="form-group">
                                <label for="exampleInputFirstname1">First Name</label>
                                <input type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "first_name")} value={formData.first_name} />
                                {!isEmpty(error.first_name) && <span className="validation-error">{error.first_name}</span>}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputLastname1">Last Name</label>
                                <input type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "last_name")} value={formData.last_name} />
                                {!isEmpty(error.last_name) && <span className="validation-error">{error.last_name}</span>}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" onChange={(e) => handleChange(e.target.value, "email")} value={formData.email} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                {!isEmpty(error.email) && <span className="validation-error">{error.email}</span>}
                            </div>
                            <div className="form-group">
                                <label for="validationTooltip04">Country</label>
                                <select className="custom-select" onChange={(e) => handleChange(e.target.value, "country")} value={formData.country} >
                                    <option selected disabled value="">Choose country</option>
                                    <option>United Arab Emirates</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                {!isEmpty(error.country) && <span className="validation-error">{error.country}</span>}
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1" className="form-label">Write Your Message</label>
                                <textarea className="form-control" rows="3" onChange={(e) => handleChange(e.target.value, "message")} value={formData.message} ></textarea>
                                {!isEmpty(error.message) && <span className="validation-error">{error.message}</span>}
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                        <div className="col-md-6 float-left red-box-position-9" data-aos="fade-up">
                            <div className="d-block">
                                <div className="red-box-absolute-img">
                                    <img className="red-absoluteimg1" src={ab_red_box_absolute1} data-aos="fade-up-left" />
                                    <img className="red-absoluteimg2" src={ab_red_box_absolute2} data-aos="fade-up-left" />
                                    <img className="red-absoluteimg3" src={ab_red_box_absolute3} data-aos="fade-up-right" />

                                </div>

                                <div className="red-box-contractus" data-aos="fade-up">
                                    <ul>
                                        <li data-aos="fade-up"><i className="bi bi-telephone-fill"></i><span> +971508973952</span> </li>
                                        <li data-aos="fade-up"><i className="bi bi-envelope-fill"></i><span> care@hellomealsonme.com</span></li>
                                        <li data-aos="fade-up"><i className="bi bi-geo-alt-fill"></i ><span>AL Quoz Industrial
                                            Area 4 Al Asayel
                                            street road 318 warehouse 4,
                                            Dubai, UAE</span></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm
