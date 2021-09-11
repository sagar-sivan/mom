import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import { logo_color } from "./../assets/images"
import { networkRequest } from "./../http/api"
import { api_url, urlConfig } from "./../http/apiConfig"
import { emailValidate } from "./../constant/common"
import LoaderAction from './../action/loader_action';

const Footer = ({ history }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" })
        });
        return () => {
            unlisten();
        }
    }, []);
    const handleScrollToTop = (e) => {
        e.preventDefault()
        window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }
    const handleChange = (value, field) => {
        formData[field] = value
        error.common = ""
        setFormData({ ...formData })
        setError({ ...error })
    }
    const handleValidate = () => {
        let error = {}
        if (isEmpty(formData.email)) {
            error.common = "Email is required"
        }
        if (!isEmpty(formData.email) && !emailValidate.test(formData.email)) {
            error.common = "Invalid email address"
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
                    MailType: "G",
                    Email: formData.email
                }
                const url = `${api_url}${urlConfig.sendEmail}`;
                const result = await networkRequest({ url, method: "POST", data })
                console.log("resultresult", result);
                if (result.responseCode == 0) {
                    setFormData({
                        email: ""
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
                Email: formData.email
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
        <>
            <footer className="footer container text-center">
                <a href="javascript:void(0);" className="footer__logo">
                    <img src={logo_color} className="img-fluid" alt="Meals On Me" />
                </a>

                <h3 className="mb-4 mt-5 pt-4">Get In touch with us</h3>

                <div className="footer__form">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Enter your Mail Id" type="text" className="form-control" onChange={(e) => handleChange(e.target.value, "email")} value={formData.email} />
                        <button className="btn__footer-form" href="#" role="button">Submit</button>
                    </form>
                    {!isEmpty(error.common) && <span className="validation-error">{error.common}</span>}
                </div>

                <nav className="footer__nav">
                    <a href="javascript:void(0);">Redeem Gift Voucher</a>
                    <Link to="/terms-and-condition" >Terms and Conditions</Link>
                    <Link to="/how-it-works">How it works</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>

                <p className="footer__copyright">Copyright MealsOnMe &copy;  2021. All rights reserved.Design and developed by <a href="https://webotix.ae" target="_blank">Webotix</a>&<a href="https://accelerateglobal.me" target="_blank">Accelerate Global</a></p>
            </footer>

            <a href="#" style={{}} onClick={(e) => handleScrollToTop(e)} className="scrollup"><i className="fas fa-chevron-up"></i></a>
        </>
    )
}

export default withRouter(Footer)
