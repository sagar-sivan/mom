import React from 'react'

import { count_1, count_2, count_3 } from "./../../assets/images"

function HomeCaloriesPlan() {
    return (
        <div className="container  skew-bg__grey__top home__calories">

            <div className="px-4 mx-4">
                <h2>
                    <span>Calories plan</span>
                    Specially designed Calorie Counted
                    <small>full day meal plan</small>
                </h2>
                <p className="mb-5">providing gourmet meals at takeaway prices, delivered hot and fresh to your doorstep</p>
            </div>

            <div className="row mx-4 justify-content-center">
                <div className="col-12 col-sm-10 col-md-7 col-lg-4 mb-4 px-4">
                    <div className="food__select small">
                        <figure><img src={count_1} alt="Meals On Me" /></figure>
                        <label for="checkbox1">
                            Indian cuisinesee
                            <span>1400 Calories</span>
                        </label>
                    </div>
                </div>

                <div className="col-12 col-sm-10 col-md-7 col-lg-4 mb-4 px-4">
                    <div className="food__select small">
                        <figure><img src={count_2} alt="Meals On Me" /></figure>
                        <label for="checkbox2">
                            Arabic cuisines
                            <span>1400 Calories</span>
                        </label>
                    </div>
                </div>

                <div className="col-12 col-sm-10 col-md-7 col-lg-4 mb-4 px-4">
                    <div className="food__select small">
                        <figure><img src={count_3} alt="Meals On Me" /></figure>
                        <label for="checkbox3">
                            International cuisines
                            <span>1400 Calories</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="col text-center my-5">
                <a className="btn btn-primary btn-lg btn__shadow-red" href="#" role="button">Start your plan now</a>
            </div>

        </div>
    )
}

export default HomeCaloriesPlan
