import React from 'react'
import { useDispatch } from 'react-redux'

import { count_1, count_2, count_3 } from "./../../assets/images"
import CommonAction from "./../../action/common_action"

function HomeCaloriesPlan() {
    const dispatch = useDispatch()
    const handleOpenPlan = (e) => {
        e.preventDefault()
        dispatch(CommonAction.setCaloriePlan(true))
        dispatch(CommonAction.handlePlanComponent(true))
    }
    return (
        <div class="container  skew-bg__grey__top home__calories" data-aos="fade-up">
            <div className="px-4 mx-4">
                <h2>
                    <span>Calories plan</span>
                    Specially designed Calorie Counted
                    <small>full day meal plan</small>
                </h2>
                <p className="mb-2 mb-md-5">providing gourmet meals at takeaway prices, delivered hot and fresh to your doorstep</p>
            </div>

            <div class="row mx-md-4 justify-content-center">
                <div class="col-6 col-lg-4 mb-4 px-md-4">
                    <div class="food__select small">
                        <figure><img src={count_1} alt="Meals On Me" /></figure>
                        <label for="checkbox1">
                            Indian cuisinesee
                            <span>1400 Calories</span>
                        </label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4 px-md-4">
                    <div class="food__select small">
                        <figure><img src={count_2} alt="Meals On Me" /></figure>
                        <label for="checkbox2">
                            Arabic cuisines
                            <span>1400 Calories</span>
                        </label>
                    </div>
                </div>

                <div class="col-6 col-lg-4 mb-4 px-md-4">
                    <div class="food__select small">
                        <figure><img src={count_3} alt="Meals On Me" /></figure>
                        <label for="checkbox3">
                            International cuisines
                            <span>1400 Calories</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="col text-center my-1 my-md-5">
                <a className="btn btn-primary btn-lg btn__shadow-red" href="#" role="button" onClick={(e) => handleOpenPlan(e)}>Start your plan now</a>
            </div>

        </div>
    )
}

export default HomeCaloriesPlan
