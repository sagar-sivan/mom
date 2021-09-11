import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { Stepper, Step } from 'react-form-stepper';
import { isEmpty } from "lodash"
import DatePicker from "react-datepicker";
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css";

import LoaderAction from '../../action/loader_action';
import CommonAction from '../../action/common_action';
import { urlConfig, api_url } from "../../http/apiConfig"
import { networkRequest } from "../../http/api"
import TEST_IMAGE from "../../assets/images/step-form/step101.jpg"
import LoginRegister from '../authentication/login_register';

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
const imageUrl = "http://mealsuae-001-site1.itempurl.com/Images/Plan/"


const StartPlan = () => {
    const dispatch = useDispatch()
    const { loginData } = useSelector(state => state.userReducer);
    const { plan_component, calorie_plan, settings } = useSelector(state => state.commonReducer);
    const planImageLocation = settings.find(item => item.pName == "Plan Image Location")?.pValue
    const dishImageLocation = settings.find(item => item.pName == "Dish Image Location")?.pValue
    const cuisineImageLocation = settings.find(item => item.pName == "Cuisine Image Location")?.pValue
    const vatPercentage = settings.find(item => item.pName == "vatPercentage")?.pValue
    const [activeStep, setActiveStep] = useState(0)
    const [planData, setPlanData] = useState([])
    const [cuisineData, setCuisineData] = useState([])
    const [noOfMealsData, setNoOfMealsData] = useState([])
    const [scheduleData, setScheduleData] = useState([])
    const [durationData, setDurationData] = useState([])
    const [selectedAllergies, setSelectedAllergies] = useState({})
    const [allergiesList, setAllergiesList] = useState([])
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    const [couponData, setCouponData] = useState({})
    useEffect(() => {
        getPlanData();
        getNumberOfMealsData()
        getScheduleData()
        getDurationData()
        getAllAllergiesList()
    }, [])
    const handleChange = (value, field) => {
        console.log(field, value);
        formData[field] = value;
        setFormData({ ...formData })
        error[field] = ""
        setError({ ...error })
    }
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
                planId: formData.plan
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
    const handleValidate = (step) => {
        let error = {}
        switch (step) {
            case 0:
                if (isEmpty(formData.plan)) {
                    error.plan = "Plan is required"
                }
                return error
            case 1:
                if (!formData.cuisine) {
                    error.cuisine = "Cuisine is required"
                }
                return error
            case 2:
                if (isEmpty(formData.noOfMeals)) {
                    error.noOfMeals = "No of meals is required"
                }
                if (isEmpty(formData.schedule)) {
                    error.schedule = "Schedule is required"
                }
                if (isEmpty(formData.duration)) {
                    error.duration = "Duration is required"
                }
                if (isEmpty(formData.duration)) {
                    error.duration = "Duration is required"
                }
                if (!formData.startDate) {
                    error.startDate = "Start date is required"
                }
                return error

            default:
                break;
        }

    }
    const handleNext = async (step) => {
        let error = {}
        switch (step) {
            case 0:
                error = await handleValidate(0)
                if (isEmpty(error)) {
                    await getCuisineData()
                    return setActiveStep(1)
                } else {
                    return setError({ ...error })
                }
                break
            case 1:
                error = await handleValidate(1)
                if (isEmpty(error)) {
                    return setActiveStep(2)
                } else {
                    return setError({ ...error })
                }
            case 2:
                error = await handleValidate(2)
                if (isEmpty(error)) {
                    return handleSaveOrder()
                    // return setActiveStep(3)
                } else {
                    return setError({ ...error })
                }
            case 3:
                return handleSaveAllergyOrder()
            // return setActiveStep(4)

        }
    }

    const handleSaveOrder = async () => {
        // return setActiveStep(3)
        try {
            // dispatch(LoaderAction.showLoader())
            const OrderDays = scheduleData.find(item => item.scheduleId == formData.schedule).numberOfDays
            const OrderQuantity = OrderDays * formData.duration * formData.noOfMeals
            const data = {
                "PlanIdTemp": formData.plan,
                "CuisineIdTemp": formData.cuisine,
                "NoOfMealsIdTemp": formData.noOfMeals,
                "ScheduleIdTemp": formData.schedule,
                "DurationIdTemp": formData.duration,
                OrderDays,
                OrderQuantity,
                "DeliveryStartingDate": moment(formData.startDate).format("DD/MM/yyyy"),
                "DeliveryEndingDate": moment(formData.startDate).add(OrderDays, 'd').format("DD/MM/yyyy")
                // "DeliveryEndingDate": moment(formData.startDate, "DD/MM/yyyy").add(OrderDays, 'days')
            }
            // return console.log("data", data);
            const url = `${api_url}${urlConfig.saveOrderData}`;
            const result = await networkRequest({ url, method: "POST", data })
            if (result.responseCode == 0) {
                formData.orderId = result.orderIdTemp
                setFormData({ ...formData })
                setActiveStep(3)
            }
            dispatch(LoaderAction.hideLoader())
            // setAllergiesList(result.apiAllergyDetailsOutputList)

        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const handleSaveAllergyOrder = async () => {
        if (!isEmpty(selectedAllergies) && !isEmpty(formData.comments)) {
            try {
                dispatch(LoaderAction.showLoader())
                const tempAllergies = Object.keys(selectedAllergies).map(item => { return ({ AllergyIdTemp: item }) })
                console.log("tempAllergies", tempAllergies);
                const data = {
                    OrderIdTemp: formData.orderId,
                    AllergyCommentsTemp: formData.comments,
                    _APIOrderAllergyDataInputList: tempAllergies
                }
                const url = `${api_url}${urlConfig.saveOrderAllergyData}`;
                const result = await networkRequest({ url, method: "POST", data })
                if (result.responseCode == 0) {
                    setActiveStep(4)
                }
                dispatch(LoaderAction.hideLoader())

            } catch (error) {
                dispatch(LoaderAction.hideLoader())
                console.log(error);
            }
        } else {
            setActiveStep(4)
        }

    }

    const handlePrevious = async (step) => {
        setActiveStep(step)
    }
    const handleAllergyChange = (value, field) => {
        console.log(field, value);
        if (value) {
            selectedAllergies[field] = value;
        } else {
            delete selectedAllergies[field];
        }

        setSelectedAllergies({ ...selectedAllergies })
    }
    const handleCLose = () => {
        console.log("close");
        dispatch(CommonAction.handlePlanComponent(false))
        setActiveStep(0)
        setFormData({})
    }
    console.log("formData", formData);
    const handleApplyCoupon = async (e) => {
        if (!isEmpty(formData.coupon)) {
            try {
                dispatch(LoaderAction.showLoader())
                const data = {
                    CouponCode: formData.coupon
                }
                const url = `${api_url}${urlConfig.getCouponById}`;
                const result = await networkRequest({ url, method: "POST", data })
                if (result.responseCode == 0) {
                    setCouponData(result)
                } else {
                    error.coupon = "Invalid coupon";
                    setError({ ...error })
                }
                dispatch(LoaderAction.hideLoader())
            } catch (error) {
                dispatch(LoaderAction.hideLoader())
                console.log(error);
            }
        } else {
            error.coupon = "Enter coupon";
            setError({ ...error })
        }

    }
    const initiatePayment = async (type) => {
        try {
            dispatch(LoaderAction.showLoader())
            const data = {
                OrderIdTemp: formData.orderId,
                CustomerIdTemp: localStorage.getItem("customerId") == 0 ? localStorage.getItem("customerIdTemp") : localStorage.getItem("customerId"),
                PaymentStatus: "P",
                OrderAmount: 400,
                OrderAmountVat: vatPercentage,
                PaymentMode: type
            }
            const url = `${api_url}${urlConfig.initiatePayment}`;
            const result = await networkRequest({ url, method: "POST", data })
            if (result.responseCode == 0) {
                if (type == "cod") {
                    UpdatePaymentStatus(result)
                } else {

                }

            } else {
                dispatch(LoaderAction.hideLoader())
            }
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const ProcessPayment = async ({ }) => {
        try {
            const data = {
                "OrderId": "50000000",
                "amount": 445555,
                "currencyCode": "AED",
                "action": "SALE",
                "emailAddress": "test@gmail.com"
            }
            const url = `${api_url}${urlConfig.processPayment}`;
            const result = await networkRequest({ url, method: "POST", data })
            // if (result.responseCode == 0) {
            //     setCouponData(result)
            // } else {
            //     error.coupon = "Invalid coupon";
            //     setError({ ...error })
            // }
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    const UpdatePaymentStatus = async ({ orderIdTemp }) => {
        try {
            const data = {
                orderIdTemp,
                "PaymentStatus": "S",
                "PaymentRefNo": "qasdqwert",
                "PaymentTransactionNumber": "vbvbvsdsd"
            }
            const url = `${api_url}${urlConfig.updatePaymentStatus}`;
            const result = await networkRequest({ url, method: "POST", data })
            // if (result.responseCode == 0) {
            //     setCouponData(result)
            // } else {
            //     error.coupon = "Invalid coupon";
            //     setError({ ...error })
            // }
            dispatch(LoaderAction.hideLoader())
        } catch (error) {
            dispatch(LoaderAction.hideLoader())
            console.log(error);
        }
    }
    return (
        <Modal
            isOpen={plan_component}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            overlayClassName=" after-payment-modal"
        // contentLabel="Example Modal"
        >
            <div className="modal1 show fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={() => handleCLose()} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="container-fluid" id="grad1">
                            <div className="justify-content-center mt-0">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center p-0 mt-3 mb-2">
                                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">

                                        <div className="row">
                                            <div className="col-md-12 mx-0">
                                                <div id="step-form-modal" >
                                                    <Stepper activeStep={activeStep} hideConnectors>
                                                        <Step label="Step 1" />
                                                        <Step label="Step 2" />
                                                        <Step label="Step 3" />
                                                        <Step label="Step 4" />
                                                        <Step label="Step 5" />
                                                    </Stepper>
                                                    {
                                                        activeStep == 0 && <fieldset>


                                                            <div className="form-card form-check-step">
                                                                <h2 className="fs-title">Select your Lunch & Dinner Plan</h2>
                                                                {!isEmpty(error.plan) && <p className="validation-error">{error.plan}</p>}
                                                                <div className="col-12">
                                                                    {
                                                                        planData.filter(item => item.isSpecialPlan == calorie_plan).map(item => {
                                                                            return (
                                                                                <div className="col-md-4 float-left">
                                                                                    <div className="plan-image-step">
                                                                                        <div className="step-1choose">
                                                                                            <div className="form-check">
                                                                                                <input className="form-check-input" type="radio" name="exampleRadios" id={`plan_${item.planId}`} value={formData.plan} onChange={(e) => handleChange(item.planId, "plan")} />
                                                                                                <label className="form-check-label" for={`plan_${item.planId}`}>
                                                                                                    <h3>{item.planName}</h3>
                                                                                                </label>
                                                                                            </div>

                                                                                        </div>
                                                                                        <img src={`${planImageLocation}${item.planFileName}`} />
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>


                                                            <input type="button" name="make_payment" onClick={() => handleNext(0)} className="next action-button" value="Next Step" id="next_button" />
                                                        </fieldset>
                                                    }
                                                    {
                                                        activeStep == 1 && <fieldset>
                                                            <div className="col-md-12 py-3">
                                                                <div className="fs-title">Select from a wide variety of Cusines</div>
                                                                {!isEmpty(error.cuisine) && <p className="validation-error">{error.cuisine}</p>}
                                                            </div>
                                                            <div className="row mx-lg-2 justify-content-center">
                                                                {
                                                                    cuisineData.map(item => {
                                                                        return (
                                                                            <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                                                                                <div className="food__select small bg-gray check-input-popp">
                                                                                    <figure><img src={`${cuisineImageLocation}${item.cuisineFileName}`} alt="Meals On Me" /></figure>
                                                                                    <input className="form-check-input" type="radio" name="In-1" id={`cuisine_${item.cuisineId}`} value={formData.cuisine} onChange={(e) => handleChange(item.cuisineId, "cuisine")} />
                                                                                    <label for={`cuisine_${item.cuisineId}`} >{item.cuisineName}</label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>

                                                            <input type="button" name="previous" className="previous action-button-previous" value="Back" onClick={() => handlePrevious(0)} />
                                                            <input type="button" name="make_payment" className="next action-button" value="Next Step" onClick={() => handleNext(1)} />
                                                        </fieldset>
                                                    }
                                                    {
                                                        activeStep == 2 && <fieldset>
                                                            <div className="col-md-12 py-3">
                                                                <div className="fs-title">Shedule your Plan</div>
                                                            </div>
                                                            <div className="col-md-12 col-12">
                                                                <div className="flex-box-modal">
                                                                    <div className="col-md-5  pb-5">
                                                                        <div className="modal-left-img">
                                                                            <h1>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h1>
                                                                            <img src={TEST_IMAGE} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-7 text-left form-shedule-popup  pb-5">
                                                                        <div className="col-md-12">

                                                                            <div className="row-item">
                                                                                <label className="col-sm-4 col-form-label">Meal Plan Selected</label>
                                                                                <div className="col-sm-8">
                                                                                    <h4>{planData.find(item => item.planId == formData.plan)?.planName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-4 col-form-label">Cusine Selected</label>
                                                                                <div className="col-sm-8">
                                                                                    <h4>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-4 col-form-label">No Of Meals/Quantity</label>
                                                                                <div className="col-sm-8">
                                                                                    <div className="row d-flex">
                                                                                        <div className="col-md-12">
                                                                                            <ul className="radio-ul-modal">
                                                                                                {
                                                                                                    noOfMealsData.map(item => {
                                                                                                        return (
                                                                                                            <li>
                                                                                                                <input className="form-check-input" type="radio" name="gridRadios" id={`no_of_meals_${item.noOfMealsId}`} value={formData.noOfMeals} onChange={(e) => handleChange(item.noOfMealsId.toString(), "noOfMeals")} />
                                                                                                                <label className="form-check-label" for={`no_of_meals_${item.noOfMealsId}`}>{item.noOfMeal}</label>
                                                                                                            </li>
                                                                                                        )
                                                                                                    })
                                                                                                }

                                                                                            </ul>
                                                                                        </div>
                                                                                        {!isEmpty(error.noOfMeals) && <p className="validation-error col-md-12">{error.noOfMeals}</p>}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row-item">
                                                                                <label className="col-sm-4 col-form-label">Schedule</label>
                                                                                <div className="col-sm-8">
                                                                                    <select className="custom-select col-md-12 " value={formData.schedule} onChange={(e) => handleChange(e.target.value, "schedule")} id="inlineFormCustomSelect">
                                                                                        <option selected value="">Choose schedule</option>
                                                                                        {
                                                                                            scheduleData.map(item => <option value={item.scheduleId}>{item.scheduleName}</option>)
                                                                                        }
                                                                                    </select>
                                                                                    {!isEmpty(error.schedule) && <p className="validation-error">{error.schedule}</p>}
                                                                                </div>
                                                                            </div>
                                                                            <div className="row-item">
                                                                                <label className="col-sm-4 col-form-label">Duration</label>
                                                                                <div className="col-sm-8">
                                                                                    <select className="custom-select col-md-12 " value={formData.duration} onChange={(e) => handleChange(e.target.value, "duration")} id="inlineFormCustomSelect">
                                                                                        <option value="" selected>Choose duration</option>
                                                                                        {
                                                                                            durationData.map(item => <option value={item.durationId}>{item.durationName}</option>)
                                                                                        }
                                                                                    </select>
                                                                                    {!isEmpty(error.duration) && <p className="validation-error">{error.duration}</p>}
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-4 col-form-label">Start Date</label>
                                                                                <div className="col-sm-8">
                                                                                    {/* <h4>08 / 02 / 2021 <span className="icon-date"></span></h4> */}
                                                                                    <DatePicker dateFormat="dd/MM/yyyy" selected={formData.startDate} onChange={(date) => handleChange(date, "startDate")} minDate={new Date()} />
                                                                                    {!isEmpty(error.startDate) && <p className="validation-error">{error.startDate}</p>}
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous" className="previous action-button-previous" value="Back" onClick={() => handlePrevious(1)} />
                                                            <input type="button" name="make_payment" className="next action-button" value="Next Step" onClick={() => handleNext(2)} />



                                                        </fieldset>
                                                    }
                                                    {
                                                        activeStep == 3 && <fieldset>

                                                            <div className="col-md-12 py-3">
                                                                <div className="fs-title">Do you have allergies?</div>
                                                            </div>
                                                            <div className="col-md-12 col-12">
                                                                <div className="flex-box-modal">
                                                                    <div className="col-md-6  pb-5">
                                                                        <div className="modal-left-img">
                                                                            <h1>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h1>
                                                                            <img src={TEST_IMAGE} />
                                                                        </div>
                                                                        <div className="col-md-12 text-left form-shedule-popup">

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Meal Plan Selected</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{planData.find(item => item.planId == formData.plan)?.planName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Cuisine Selected</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">No Of Meals/Quantity</label>
                                                                                <div className="col-sm-6">
                                                                                    <div className="row d-flex">
                                                                                        <div className="col-md-6">
                                                                                            <h4>{noOfMealsData.find(item => item.noOfMealsId == formData.noOfMeals)?.noOfMeal}</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Schedule</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{scheduleData.find(item => item.scheduleId == formData.schedule)?.scheduleName}</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Duration</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{durationData.find(item => item.durationId == formData.duration)?.durationName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Start Date</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{moment(formData.startDate).format('MM/DD/YYYY')} <span className="icon-date"></span></h4>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 modal-allergies-tab text-left pb-5">
                                                                        <div className="col-12">

                                                                            <div className="allergies__tab-menu">
                                                                                <nav className="nav tab__menu__1" id="pills-tab" role="tablist">
                                                                                    <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                                                                        Allergies
                                                                                    </a>
                                                                                </nav>
                                                                            </div>

                                                                            <div className="tab-content tab__content__1 text-left">
                                                                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">

                                                                                    {
                                                                                        allergiesList.map(item => {
                                                                                            return (<label className="select__style__1"> <input type="checkbox" className="select__input" checked={selectedAllergies.milk} onChange={(e) => handleAllergyChange(e.target.checked, item.allergyId)} /> {item.allergyName} </label>)
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                            </div>

                                                                            <div className="textarea__style__1 mt-4">
                                                                                <textarea placeholder="Comments & Specific Allergies" value={formData.comments} onChange={(e) => handleChange(e.target.value, "comments")} />
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous" className="previous action-button-previous" value="Back" onClick={() => handlePrevious(2)} />
                                                            <input type="button" name="make_payment" className="next action-button" value="Next Step" onClick={() => handleNext(3)} />



                                                        </fieldset>
                                                    }



                                                    {
                                                        activeStep == 4 && <fieldset>

                                                            <div className="col-md-12 py-3">
                                                                <div className="fs-title">Pricing</div>
                                                            </div>
                                                            <div className="col-md-12 col-12">
                                                                <div className="flex-box-modal">
                                                                    <div className="col-md-6  pb-5">
                                                                        <div className="modal-left-img">
                                                                            <h1>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h1>
                                                                            <img src={TEST_IMAGE} />
                                                                        </div>
                                                                        <div className="col-md-12 text-left form-shedule-popup">

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Meal Plan Selected</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{planData.find(item => item.planId == formData.plan)?.planName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Cuisine Selected</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">No Of Meals/Quantity</label>
                                                                                <div className="col-sm-6">
                                                                                    <div className="row d-flex">
                                                                                        <div className="col-md-6">
                                                                                            <h4>{noOfMealsData.find(item => item.noOfMealsId == formData.noOfMeals)?.noOfMeal}</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Schedule</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{scheduleData.find(item => item.scheduleId == formData.schedule)?.scheduleName}</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Duration</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{durationData.find(item => item.durationId == formData.duration)?.durationName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row-item">
                                                                                <label className="col-sm-6 col-form-label">Start Date</label>
                                                                                <div className="col-sm-6">
                                                                                    <h4>{moment(formData.startDate).format('MM/DD/YYYY')} <span className="icon-date"></span></h4>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="allergies__tab-menu">
                                                                                <nav className="nav tab__menu__1" id="pills-tab" role="tablist">
                                                                                    <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                                                                        Allergies
                                                                                    </a>
                                                                                </nav>
                                                                            </div>
                                                                            <div className="tab-content tab__content__1 text-left">
                                                                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                                                                    {
                                                                                        Object.keys(selectedAllergies).map(item => <label className="select__style__1"> <input type="checkbox" className="select__input" checked /> {allergiesList.find(item1 => item1.allergyId == item)?.allergyName} </label>)
                                                                                    }

                                                                                    {/* <label className="select__style__1"> <input type="checkbox" className="select__input" checked /> Milk </label>
                                                                                    <label className="select__style__1"> <input type="checkbox" className="select__input" checked /> Milk products </label>
                                                                                    <label className="select__style__1"> <input type="checkbox" className="select__input" checked /> Nuts </label> */}

                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        {
                                                                            !isEmpty(formData.comments) && <div className="col-md-12 text-left form-shedule-popup">

                                                                                <div className="row-item">
                                                                                    <label className="col-sm-6 col-form-label">Comment</label>
                                                                                    <div className="col-sm-6">
                                                                                        <h4>{formData.comments}</h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        }




                                                                    </div>
                                                                    {console.log("loginData", loginData)}
                                                                    <div className="col-md-6 modal-allergies-tab text-left pb-5">
                                                                        {
                                                                            isEmpty(loginData) ? <>
                                                                                <LoginRegister />
                                                                                <div className="col-md-12 py-3 text-center">

                                                                                    <div className="alert alert alert-danger" role="alert">
                                                                                        Please login / Register to get the price
                                                                                    </div>

                                                                                </div>
                                                                            </> :
                                                                                <div className="col-md-12 d-block py-4">
                                                                                    <div className="col-md-6 float-left">
                                                                                        <h4>Cost in AED</h4>

                                                                                        <button type="button" className="btn btn-primary btn__shadow-red" onClick={() => initiatePayment("online")} >Pay</button>
                                                                                    </div>

                                                                                    <div className="col-md-6 float-left">
                                                                                        <h4>1200 AED</h4>
                                                                                        <button type="submit" className="btn btn-primary" onClick={() => initiatePayment("cod")}>Cash On Delivery</button>
                                                                                    </div>
                                                                                </div>
                                                                        }


                                                                        <div className="row pt-5">
                                                                            <div className="coupon-code m-3" style={{ justifyContent: "space-around" }}>
                                                                                <div className="form-group">
                                                                                    <input type="text" className="form-control" placeholder="Coupon code" value={formData.coupon} onChange={(e) => handleChange(e.target.value, "coupon")} />
                                                                                    {!isEmpty(error.coupon) && <p className="validation-error">{error.coupon}</p>}
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <a className="submit-coupon" href="#" onClick={(e) => handleApplyCoupon(e)}>Add</a>
                                                                                </div>
                                                                                {/* <div className="col-2 color-bg1">
                                                                                    <i className="bi bi-gift"></i>
                                                                                </div>
                                                                                <div className="col-10 color-bg2">
                                                                                    <div className="head-coupon">
                                                                                        <span className="logo-c"><img src="../images/logo/logo_color.png" /></span>
                                                                                        <h3>Thank You for Being Our Customer</h3>
                                                                                    </div>
                                                                                    <div className="body-coupon">

                                                                                        <h2><b>GET 20% OFF</b></h2>

                                                                                        <p>Use Promo Code: <span className="promo">MOM00821</span></p>
                                                                                        <a className="submit-coupon" href="#">Add</a>
                                                                                    </div>
                                                                                </div> */}

                                                                            </div>
                                                                        </div>



                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous" className="previous action-button-previous" value="Back" onClick={() => handlePrevious(3)} />
                                                        </fieldset>
                                                    }








                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default StartPlan
