import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"
import queryString from "query-string"

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

const PaymentSummary = (props) => {
    const dispatch = useDispatch()
    const parsed = queryString.parse(props.location.search);
    console.log(parsed);
    const { paymentSummary } = useSelector(state => state.commonReducer);
    const [planData, setPlanData] = useState([])
    const [cuisineData, setCuisineData] = useState([])
    const [noOfMealsData, setNoOfMealsData] = useState([])
    const [scheduleData, setScheduleData] = useState([])
    const [durationData, setDurationData] = useState([])
    const [allergiesList, setAllergiesList] = useState([])

    useEffect(() => {
        if (paymentSummary.isVisible) {
            getPlanData();
            getNumberOfMealsData()
            getScheduleData()
            getDurationData()
            getAllAllergiesList()
            getCuisineData()
        }
    }, [paymentSummary.isVisible])

    const getPlanData = async () => {
        try {
            dispatch(LoaderAction.showLoader())
            const url = `${api_url}${urlConfig.getPlanData}`;
            const result = await networkRequest({ url })
            setPlanData(result.apiPlanDataOutputList)
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const getNumberOfMealsData = async () => {
        try {
            const url = `${api_url}${urlConfig.getNoOfMealsData}`;
            const result = await networkRequest({ url })
            setNoOfMealsData(result._APINoOfMealsDataOutputList)

        } catch (error) {
            console.log(error);
        }
    }
    const getScheduleData = async () => {
        try {
            const url = `${api_url}${urlConfig.getScheduleData}`;
            const result = await networkRequest({ url })
            setScheduleData(result._APIScheduleDataOutputList)

        } catch (error) {
            console.log(error);
        }
    }
    const getDurationData = async () => {
        try {
            const url = `${api_url}${urlConfig.getDurationData}`;
            const result = await networkRequest({ url })
            setDurationData(result._APIDurationDataOutputList)

        } catch (error) {
            console.log(error);
        }
    }
    const getAllAllergiesList = async () => {
        try {
            const url = `${api_url}${urlConfig.getAllAllergies}`;
            const result = await networkRequest({ url })
            setAllergiesList(result.apiAllergyDetailsOutputList)

        } catch (error) {
            console.log(error);
        }
    }
    const getCuisineData = async () => {
        try {
            dispatch(LoaderAction.showLoader())
            const data = {
                planId: paymentSummary.PlanIdTemp
            }
            const url = `${api_url}${urlConfig.getCuisineData}`;
            const result = await networkRequest({ url, method: "POST", data })
            console.log("res", result);
            setCuisineData(result.apiCuisineDataOutputList)
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }

    console.log(paymentSummary);
    const handleCLoseModal = () => {
        dispatch(CommonAction.paymentSummaryModal({
            isVisible: false
        }))
    }
    const handleSelectMenu = () => {
        props.history.replace("/profile")
        handleCLoseModal()
        dispatch(CommonAction.handleMenuComponent({
            isVisible: true,
            OrderId: parsed.orderid,
            planId: paymentSummary.PlanIdTemp,
            CuisineId: paymentSummary.CuisineIdTemp
        }))
        localStorage.removeItem("formData")
    }

    return (
        <Modal
            isOpen={paymentSummary.isVisible}
            style={customStyles}
            overlayClassName=" view-summary"
        >
            <div class="modal1 fade show" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" onClick={() => handleCLoseModal()} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-12 py-3 text-center">
                            <h5 class="modal-title" id="exampleModalLongTitle">View Summary</h5>
                        </div>

                        <div class="modal-body">

                            <div class="col-12 py-1">
                                <div class="view-summary-box mx-auto">
                                    <div class="col-6">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Order No.</th>
                                                    <td>{parsed.orderid}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Meal Plan Selected</th>
                                                    <td>  {planData.find(item => item.planId == paymentSummary.PlanIdTemp)?.planName}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Cusine Selected</th>
                                                    <td> {cuisineData?.find(item => item.cuisineId == paymentSummary.CuisineIdTemp)?.cuisineName} </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Quantity</th>
                                                    <td>{paymentSummary.OrderQuantity}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Schedule</th>
                                                    <td> {scheduleData.find(item => item.scheduleId == paymentSummary.ScheduleIdTemp)?.scheduleName}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Duration</th>
                                                    <td> {durationData.find(item => item.durationId == paymentSummary.DurationIdTemp)?.durationName}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Start Date</th>
                                                    <td>{paymentSummary.DeliveryStartingDate}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div class="col-6">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Amount</th>
                                                    <td>{paymentSummary.totalAmount} AED</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Status</th>
                                                    <td>Paid</td>
                                                </tr>
                                                {/* <tr>
                                                    <th scope="row">Allergies</th>
                                                    <td> Milk , Milk products, Nuts</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"></th>
                                                    <td>Reduce oil</td>
                                                </tr> */}
                                                {/* <tr>
                                                    <th scope="row">Address</th>
                                                    <td>City:Dubai State/province/area :Dubai</td>
                                                </tr> */}
                                            </tbody>
                                        </table>

                                        <div class="col-12 text-center py-5">
                                            <h4>Your Payment  is sucssesfull</h4>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary btnsm btn__shadow-red py-1" onClick={() => handleSelectMenu()}>Select menu</button>

                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default withRouter(PaymentSummary)
