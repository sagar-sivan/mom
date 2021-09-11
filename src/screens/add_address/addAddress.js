import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoaderAction from '../../action/loader_action';
import ProfileAction from '../../action/profile_action';
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"
import { emailValidate } from "./../../constant/common"

import AddressAction from "./../../action/address_action"

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

const AddAddress = () => {
    const dispatch = useDispatch()
    const { addAddressModal } = useSelector(state => state.addressReducer);
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    const [locations, setLocations] = useState([])
    const handleCloseAddAddress = () => {
        dispatch(AddressAction.openAddAddress(false))
    }
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
        error[field] = ""
        setFormData({ ...formData })
        setError({ ...error })
    }

    const handleValidate = () => {
        let error = {}
        if (isEmpty(formData.location_name)) {
            error.location_name = "Location name is required"
        }
        if (isEmpty(formData.location)) {
            error.location = "Location is required"
        }
        if (isEmpty(formData.address)) {
            error.address = "Address is required"
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
                    "address": formData.address,
                    "customerId": localStorage.getItem("customerId"),
                    "addressName": formData.location_name,
                    "locationId": formData.location
                }
                const url = `${api_url}${urlConfig.createCustomerAddress}`;
                const result = await networkRequest({ url, method: "POST", data })
                console.log("resultresult", result);
                if (result.responseCode == 0) {
                    setFormData({
                        location_name: "",
                        location: "",
                        address: ""
                    })
                    setError({})
                    handleCloseAddAddress()

                    dispatch(ProfileAction.getCustomerAddress(localStorage.getItem("customerId"), true))
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
            isOpen={addAddressModal}
            style={customStyles}
            overlayClassName=" login-form2 add__address_modal"
        >
            <div className="modal1 fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        <div className="modal-body login-form-content">
                            <div className="col-12 modal-allergies-tab text-left py-3">

                                <h2 className="fs-title mb-4">Edit your Address</h2>
                                <form onSubmit={handleSubmit}>
                                    {!isEmpty(error.common) && <span className="validation-error">{error.common}</span>}
                                    <div className="form-group">
                                        <i className="bi-pin-map-fill user-stepmodal"></i>
                                        <input type="text" className="form-control" placeholder="Location Name" onChange={(e) => handleChange(e.target.value, "location_name")} value={formData.location_name} />
                                        {!isEmpty(error.location_name) && <span className="validation-error">{error.location_name}</span>}
                                    </div>

                                    <div className="form-group d-flex align-items-center mt-4">
                                        <div className="py-1 m-1">
                                            Location
                                        </div>
                                        <div className="py-1 w-100">
                                            <select className="custom-select " id="inlineFormCustomSelect" onChange={(e) => handleChange(e.target.value, "location")} value={formData.location}>
                                                <option disabled selected value="">Choose location</option>
                                                {
                                                    locations.map(item => <option key={item.locationId} value={item.locationId}>{item.locationName}</option>)
                                                }
                                            </select>
                                            {!isEmpty(error.location) && <span className="validation-error">{error.location}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className=" mt-4">
                                            <textarea placeholder="Address" onChange={(e) => handleChange(e.target.value, "address")} value={formData.address}></textarea>
                                            {!isEmpty(error.address) && <span className="validation-error">{error.address}</span>}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button onClick={() => handleCloseAddAddress()} type="button" className="btn btn-primary d-inline-block" data-dismiss="modal" aria-label="Close">Cancel</button>
                                        <button type="submit" className="btn btn-primary d-inline-block" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target=".login-form5">Add Address</button>

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

export default AddAddress
