import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { Stepper, Step } from 'react-form-stepper';
import { isEmpty } from "lodash"
import DatePicker from "react-datepicker";
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css";

import LoaderAction from '../action/loader_action';
import CommonAction from '../action/common_action';
import { urlConfig, api_url } from "./../http/apiConfig"
import { networkRequest } from "./../http/api"
import TEST_IMAGE from "../assets/images/step-form/step101.jpg"

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
    const { plan_component } = useSelector(state => state.commonReducer);
    const [activeStep, setActiveStep] = useState(0)
    const [planData, setPlanData] = useState([])
    const [cuisineData, setCuisineData] = useState([])
    const [noOfMealsData, setNoOfMealsData] = useState([])
    const [scheduleData, setScheduleData] = useState([])
    const [durationData, setDurationData] = useState([])
    const [allergies, setAllergies] = useState({})
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    useEffect(() => {
        getPlanData();
        getNumberOfMealsData()
        getScheduleData()
        getDurationData()
    }, [])
    const handleChange = (value, field) => {
        console.log(field, value);
        formData[field] = value;
        setFormData({ ...formData })
    }
    const getPlanData = async () => {
        try {
            const url = `${api_url}${urlConfig.getPlanData}`;
            const result = await networkRequest({ url })
            setPlanData(result.apiPlanDataOutputList)

        } catch (error) {
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
                console.log(error);
                if (isEmpty(error)) {
                    await getCuisineData()
                    return setActiveStep(1)
                } else {
                    return setError({ ...error })
                }
                break
            case 1:
                error = await handleValidate(1)
                console.log(error);
                if (isEmpty(error)) {
                    return setActiveStep(2)
                } else {
                    return setError({ ...error })
                }
            case 2:
                error = await handleValidate(2)
                console.log(error);
                if (isEmpty(error)) {
                    return setActiveStep(3)
                } else {
                    return setError({ ...error })
                }
            case 3:
                return setActiveStep(4)

        }
    }

    const handlePrevious = async (step) => {
        setActiveStep(step)
    }
    const handleAllergyChange = (value, field) => {
        console.log(field, value);
        allergies[field] = value;
        setAllergies({ ...allergies })

    }
    const handleCLose = () => {
        console.log("close");
        dispatch(CommonAction.handlePlanComponent(false))
        setActiveStep(0)
        setFormData({})
    }
    console.log("formData", formData);
    return (
        <Modal
            isOpen={plan_component}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            overlayClassName=" after-payment-modal"
        // contentLabel="Example Modal"
        >
            <div class="modal1 show fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" onClick={() => handleCLose()} class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="container-fluid" id="grad1">
                            <div class="justify-content-center mt-0">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 text-center p-0 mt-3 mb-2">
                                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">

                                        <div class="row">
                                            <div class="col-md-12 mx-0">
                                                <form id="step-form-modal">
                                                    <Stepper activeStep={activeStep} hideConnectors>
                                                        <Step label="Step 1" />
                                                        <Step label="Step 2" />
                                                        <Step label="Step 3" />
                                                        <Step label="Step 4" />
                                                        <Step label="Step 5" />
                                                    </Stepper>
                                                    {/* <ul id="progressbar">
                                                        <li class="active" id="step-1"><strong>Step 1</strong></li>
                                                        <li id="step-2"><strong>Step 2</strong></li>
                                                        <li id="step-3"><strong>Step 3</strong></li>
                                                        <li id="step-4"><strong>Step 4</strong></li>
                                                        <li id="step-5"><strong>Step 5</strong></li>
                                                    </ul> */}
                                                    {
                                                        activeStep == 0 && <fieldset>


                                                            <div class="form-card form-check-step">
                                                                <h2 class="fs-title">Select your Lunch & Dinner Plan</h2>
                                                                {!isEmpty(error.plan) && <p className="validation-error">{error.plan}</p>}

                                                                {
                                                                    planData.map(item => {
                                                                        return (
                                                                            <div class="col-md-4 float-left">
                                                                                <div class="plan-image-step">
                                                                                    <div class="step-1choose">
                                                                                        <div class="form-check">
                                                                                            <input class="form-check-input" type="radio" name="exampleRadios" id={`plan_${item.planId}`} value={formData.plan} onChange={(e) => handleChange(item.planId, "plan")} />
                                                                                            <label class="form-check-label" for={`plan_${item.planId}`}>
                                                                                                <h3>{item.planName}</h3>
                                                                                            </label>
                                                                                        </div>

                                                                                    </div>
                                                                                    <img src={`${imageUrl}${item.planFileName}`} />
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>

                                                            <input type="button" name="make_payment" onClick={() => handleNext(0)} class="next action-button" value="Next Step" id="next_button" />
                                                        </fieldset>
                                                    }
                                                    {
                                                        activeStep == 1 && <fieldset>
                                                            <div class="col-md-12 py-3">
                                                                <div class="fs-title">Select from a wide variety of Cusines</div>
                                                                {!isEmpty(error.cuisine) && <p className="validation-error">{error.cuisine}</p>}
                                                            </div>
                                                            <div class="row mx-lg-2 justify-content-center">
                                                                {
                                                                    cuisineData.map(item => {
                                                                        return (
                                                                            <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                                                                                <div class="food__select small bg-gray check-input-popp">
                                                                                    <figure><img src={`${imageUrl}${item.cuisineFileName}`} alt="Meals On Me" /></figure>
                                                                                    <input class="form-check-input" type="radio" name="In-1" id={`cuisine_${item.cuisineId}`} value={formData.cuisine} onChange={(e) => handleChange(item.cuisineId, "cuisine")} />
                                                                                    <label for={`cuisine_${item.cuisineId}`} >{item.cuisineName}</label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>

                                                            <input type="button" name="previous" class="previous action-button-previous" value="Back" onClick={() => handlePrevious(0)} />
                                                            <input type="button" name="make_payment" class="next action-button" value="Next Step" onClick={() => handleNext(1)} />
                                                        </fieldset>
                                                    }
                                                    {
                                                        activeStep == 2 && <fieldset>
                                                            <div class="col-md-12 py-3">
                                                                <div class="fs-title">Shedule your Plan</div>
                                                            </div>
                                                            <div class="col-md-12 col-12">
                                                                <div class="flex-box-modal">
                                                                    <div class="col-md-5  pb-5">
                                                                        <div class="modal-left-img">
                                                                            <h1>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h1>
                                                                            <img src={TEST_IMAGE} />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-7 text-left form-shedule-popup  pb-5">
                                                                        <div class="col-md-12">

                                                                            <div class="row-item">
                                                                                <label class="col-sm-4 col-form-label">Meal Plan Selected</label>
                                                                                <div class="col-sm-8">
                                                                                    <h4>{planData.find(item => item.planId == formData.plan)?.planName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-4 col-form-label">Cusine Selected</label>
                                                                                <div class="col-sm-8">
                                                                                    <h4>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-4 col-form-label">No Of Meals/Quantity</label>
                                                                                <div class="col-sm-8">
                                                                                    <div class="row d-flex">
                                                                                        <div class="col-md-6">
                                                                                            <ul class="radio-ul-modal">
                                                                                                {
                                                                                                    noOfMealsData.map(item => {
                                                                                                        return (
                                                                                                            <li>
                                                                                                                <input class="form-check-input" type="radio" name="gridRadios" id={`no_of_meals_${item.noOfMealsId}`} value={formData.noOfMeals} onChange={(e) => handleChange(item.noOfMealsId.toString(), "noOfMeals")} />
                                                                                                                <label class="form-check-label" for={`no_of_meals_${item.noOfMealsId}`}>{item.noOfMeal}</label>
                                                                                                            </li>
                                                                                                        )
                                                                                                    })
                                                                                                }

                                                                                            </ul>
                                                                                        </div>
                                                                                        {!isEmpty(error.noOfMeals) && <p className="validation-error">{error.noOfMeals}</p>}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row-item">
                                                                                <label class="col-sm-4 col-form-label">Schedule</label>
                                                                                <div class="col-sm-8">
                                                                                    <select class="custom-select col-md-12 " value={formData.schedule} onChange={(e) => handleChange(e.target.value, "schedule")} id="inlineFormCustomSelect">
                                                                                        <option selected value="">Choose schedule</option>
                                                                                        {
                                                                                            scheduleData.map(item => <option value={item.scheduleId}>{item.scheduleName}</option>)
                                                                                        }
                                                                                    </select>
                                                                                    {!isEmpty(error.schedule) && <p className="validation-error">{error.schedule}</p>}
                                                                                </div>
                                                                            </div>
                                                                            <div class="row-item">
                                                                                <label class="col-sm-4 col-form-label">Duration</label>
                                                                                <div class="col-sm-8">
                                                                                    <select class="custom-select col-md-12 " value={formData.duration} onChange={(e) => handleChange(e.target.value, "duration")} id="inlineFormCustomSelect">
                                                                                        <option selected>Choose..</option>
                                                                                        {
                                                                                            durationData.map(item => <option value={item.durationId}>{item.durationName}</option>)
                                                                                        }
                                                                                    </select>
                                                                                    {!isEmpty(error.duration) && <p className="validation-error">{error.duration}</p>}
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-4 col-form-label">Start Date</label>
                                                                                <div class="col-sm-8">
                                                                                    {/* <h4>08 / 02 / 2021 <span class="icon-date"></span></h4> */}
                                                                                    <DatePicker dateFormat="dd/MM/yyyy" selected={formData.startDate} onChange={(date) => handleChange(date, "startDate")} />
                                                                                    {!isEmpty(error.startDate) && <p className="validation-error">{error.startDate}</p>}
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous" class="previous action-button-previous" value="Back" onClick={() => handlePrevious(1)} />
                                                            <input type="button" name="make_payment" class="next action-button" value="Next Step" onClick={() => handleNext(2)} />



                                                        </fieldset>
                                                    }
                                                    {
                                                        activeStep == 3 && <fieldset>

                                                            <div class="col-md-12 py-3">
                                                                <div class="fs-title">Do you have allergies?</div>
                                                            </div>
                                                            <div class="col-md-12 col-12">
                                                                <div class="flex-box-modal">
                                                                    <div class="col-md-6  pb-5">
                                                                        <div class="modal-left-img">
                                                                            <h1>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h1>
                                                                            <img src={TEST_IMAGE} />
                                                                        </div>
                                                                        <div class="col-md-12 text-left form-shedule-popup">

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Meal Plan Selected</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{planData.find(item => item.planId == formData.plan)?.planName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Cuisine Selected</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">No Of Meals/Quantity</label>
                                                                                <div class="col-sm-6">
                                                                                    <div class="row d-flex">
                                                                                        <div class="col-md-6">
                                                                                            <h4>{noOfMealsData.find(item => item.noOfMealsId == formData.noOfMeals)?.noOfMeal}</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Schedule</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{scheduleData.find(item => item.scheduleId == formData.schedule)?.scheduleName}</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Duration</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{durationData.find(item => item.durationId == formData.duration)?.durationName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Start Date</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{moment(formData.startDate).format('MM/DD/YYYY')} <span class="icon-date"></span></h4>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-6 modal-allergies-tab text-left pb-5">
                                                                        <div class="col-12">

                                                                            <div class="allergies__tab-menu">
                                                                                <nav class="nav tab__menu__1" id="pills-tab" role="tablist">
                                                                                    <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                                                                        Allergies
                                                                                    </a>
                                                                                </nav>
                                                                            </div>

                                                                            <div class="tab-content tab__content__1 text-left">
                                                                                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">

                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked={allergies.milk} onChange={(e) => handleAllergyChange(e.target.checked, "milk")} /> Milk </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked={allergies.milk_products} onChange={(e) => handleAllergyChange(e.target.checked, "milk_products")} /> Milk products </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked={allergies.nuts} onChange={(e) => handleAllergyChange(e.target.checked, "nuts")} /> Nuts </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked={allergies.fish} onChange={(e) => handleAllergyChange(e.target.checked, "fish")} /> Fish & Shellfish </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked={allergies.wheat} onChange={(e) => handleAllergyChange(e.target.checked, "wheat")} /> Wheat & gluten </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked={allergies.soya} onChange={(e) => handleAllergyChange(e.target.checked, "soya")} /> Soya </label>
                                                                                </div>
                                                                            </div>

                                                                            <div class="textarea__style__1 mt-4">
                                                                                <textarea placeholder="Comments & Specific Allergies"></textarea>
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous" class="previous action-button-previous" value="Back" onClick={() => handlePrevious(2)} />
                                                            <input type="button" name="make_payment" class="next action-button" value="Next Step" onClick={() => handleNext(3)} />



                                                        </fieldset>
                                                    }



                                                    {
                                                        activeStep == 4 && <fieldset>

                                                            <div class="col-md-12 py-3">
                                                                <div class="fs-title">Pricing</div>
                                                            </div>
                                                            <div class="col-md-12 col-12">
                                                                <div class="flex-box-modal">
                                                                    <div class="col-md-6  pb-5">
                                                                        <div class="modal-left-img">
                                                                            <h1>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h1>
                                                                            <img src={TEST_IMAGE} />
                                                                        </div>
                                                                        <div class="col-md-12 text-left form-shedule-popup">

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Meal Plan Selected</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{planData.find(item => item.planId == formData.plan)?.planName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Cuisine Selected</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{cuisineData.find(item => item.cuisineId == formData.cuisine)?.cuisineName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">No Of Meals/Quantity</label>
                                                                                <div class="col-sm-6">
                                                                                    <div class="row d-flex">
                                                                                        <div class="col-md-6">
                                                                                            <h4>{noOfMealsData.find(item => item.noOfMealsId == formData.noOfMeals)?.noOfMeal}</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Schedule</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{scheduleData.find(item => item.scheduleId == formData.schedule)?.scheduleName}</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Duration</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{durationData.find(item => item.durationId == formData.duration)?.durationName}</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row-item">
                                                                                <label class="col-sm-6 col-form-label">Start Date</label>
                                                                                <div class="col-sm-6">
                                                                                    <h4>{moment(formData.startDate).format('MM/DD/YYYY')} <span class="icon-date"></span></h4>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="allergies__tab-menu">
                                                                                <nav class="nav tab__menu__1" id="pills-tab" role="tablist">
                                                                                    <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                                                                        Allergies
                                                                                    </a>
                                                                                </nav>
                                                                            </div>
                                                                            {console.log("allergies", allergies)}
                                                                            <div class="tab-content tab__content__1 text-left">
                                                                                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                                                                    {
                                                                                        Object.keys(allergies).map(item => <label class="select__style__1"> <input type="checkbox" class="select__input" checked /> {item} </label>)
                                                                                    }

                                                                                    {/* <label class="select__style__1"> <input type="checkbox" class="select__input" checked /> Milk </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked /> Milk products </label>
                                                                                    <label class="select__style__1"> <input type="checkbox" class="select__input" checked /> Nuts </label> */}

                                                                                </div>
                                                                            </div>

                                                                        </div>




                                                                    </div>

                                                                    <div class="col-md-6 modal-allergies-tab text-left pb-5">
                                                                        <div class="col-md-12 d-block py-4">
                                                                            <div class="col-md-6 float-left">
                                                                                <h4>Cost in AED</h4>

                                                                                <button type="button" class="btn btn-primary btn__shadow-red" data-toggle="modal" data-target=".view-summary">Pay</button>
                                                                            </div>

                                                                            <div class="col-md-6 float-left">
                                                                                <h4>1200 AED</h4>
                                                                                <button type="submit" class="btn btn-primary">Cash On Delivery</button>
                                                                            </div>
                                                                        </div>

                                                                        <div class="row pt-5">
                                                                            <div class="coupon-code m-3">
                                                                                <div class="col-2 color-bg1">
                                                                                    <i class="bi bi-gift"></i>
                                                                                </div>
                                                                                <div class="col-10 color-bg2">
                                                                                    <div class="head-coupon">
                                                                                        <span class="logo-c"><img src="../images/logo/logo_color.png" /></span>
                                                                                        <h3>Thank You for Being Our Customer</h3>
                                                                                    </div>
                                                                                    <div class="body-coupon">

                                                                                        <h2><b>GET 20% OFF</b></h2>

                                                                                        <p>Use Promo Code: <span class="promo">MOM00821</span></p>
                                                                                        <a class="submit-coupon" href="#">Add</a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>



                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous" class="previous action-button-previous" value="Back" onClick={() => handlePrevious(3)} />
                                                        </fieldset>
                                                    }








                                                </form>
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
