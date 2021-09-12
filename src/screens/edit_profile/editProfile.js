import React, { useState } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoaderAction from '../../action/loader_action';
import ProfileAction from '../../action/profile_action';
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"
import { emailValidate } from "./../../constant/common"

Modal.setAppElement('body');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const EditProfile = () => {
    const dispatch = useDispatch()
    const { editProfileModal, userData } = useSelector(state => state.profileReducer);

    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    const handleCloseEditProfile = () => {
        dispatch(ProfileAction.openEditProfile(false))
    }
    const handleChange = (value, field) => {
        formData[field] = value
        error[field] = ""
        setFormData({ ...formData })
        setError({ ...error })
    }

    const handleValidate = () => {
        let error = {}
        if (isEmpty(formData.email)) {
            error.email = "Email is required"
        }
        if (!isEmpty(formData.email) && !emailValidate.test(formData.email)) {
            error.email = "Invalid email address"
        }
        if (isEmpty(formData.number)) {
            error.number = "Phone number is required"
        }
        if (isEmpty(formData.password)) {
            error.password = "Password is required"
        }
        if (isEmpty(formData.c_password)) {
            error.c_password = "Confirm password is required"
        }
        if (!isEmpty(formData.password) && !isEmpty(formData.c_password) && formData.password != formData.c_password) {
            error.c_password = "Password miss match"
        }
        return error
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let error = await handleValidate();
            if (isEmpty(error)) {
                dispatch(LoaderAction.showLoader())
                const data = {
                    Email: formData.email,
                    MobileNumber: formData.number,
                    CustomerId: localStorage.getItem("customerId"),
                    Password: formData.password,
                    RePassWord: formData.c_password
                }
                const url = `${api_url}${urlConfig.updateProfile}`;
                const result = await networkRequest({ url, method: "POST", data })
                console.log("resultresult", result);
                if (result.responseCode == 0) {
                    setFormData({
                        email: "",
                        number: "",
                        password: "",
                        c_password: ""
                    })
                    setError({})
                    handleCloseEditProfile()

                    dispatch(ProfileAction.getAllProfileData(localStorage.getItem("customerId")))
                    dispatch(CommonAction.openCommonAlert({
                        isVisible: true,
                        title: "Profile updated successfully",
                        buttons: [
                            {
                                title: "Ok", action: () => { dispatch(CommonAction.openCommonAlert({ isVisible: false })); }
                            }
                        ]
                    }))
                } else {
                    error.common = result.responseName
                    setError({ ...error })
                    dispatch(LoaderAction.hideLoader())
                }
            } else {
                setError({ ...error })
                dispatch(LoaderAction.hideLoader())
            }
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    return (
        <Modal
            isOpen={editProfileModal}
            style={customStyles}
            overlayClassName=" login-form3"
        >
            <div className="modal1 fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        <div className="modal-body login-form-content">
                            <div className="col-12 modal-allergies-tab text-left py-3">

                                <h2 className="fs-title mb-4">Edit Profile</h2>


                                <div className="profile__card">
                                    <div className="profile__card__left profile__status status-red text-center">
                                        <figure className="profile__pic">
                                            <img src="../images/placeholder/profile_1.jpg" alt="Meals On Me" />
                                        </figure>
                                    </div>

                                    <div className="profile__card__right">
                                        <h5>{userData.customerName}</h5>
                                        <p><span>Subscription ID:</span>{userData.customerReferenceNo}</p>

                                        {/* <a href="#" className="item__btn" tabindex="0">Edit image</a> */}
                                    </div>

                                </div>

                                <form onSubmit={handleSubmit}>
                                    {!isEmpty(error.common) && <span className="validation-error">{error.common}</span>}
                                    <div className="form-group">
                                        <i className="bi bi-envelope-fill  user-stepmodal"></i>
                                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => handleChange(e.target.value, "email")} value={formData.email} />
                                        {!isEmpty(error.email) && <span className="validation-error">{error.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <i className="bi bi-phone-fill  user-stepmodal"></i>
                                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile Number" onChange={(e) => handleChange(e.target.value, "number")} value={formData.number} />
                                        {!isEmpty(error.number) && <span className="validation-error">{error.number}</span>}
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


                                    <div className="text-center">
                                        <button type="button" onClick={() => handleCloseEditProfile()} className="btn btn-primary d-inline-block" data-dismiss="modal" aria-label="Close">Cancel</button>
                                        <button type="submit" className="btn btn-primary d-inline-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target=".login-form6">Save</button>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EditProfile
