import React from 'react'

import { plan_1, plan_2, plan_3 } from "./../../assets/images"

function HomePlan() {
    return (
        <div className="container home__plans">
            <div className="row">
                <div className="col-12 col-xl-5">
                    <div className="home__plans__text">
                        <h2>
                            <span>Delicious foods </span>
                            Our Veg & <br />Non Veg Plans
                            <small>will be a right choice for you</small>
                        </h2>
                        <p>Offering Freshly, Healthy Nutritious daily meals at your door-step</p>
                    </div>
                </div>

                <div className="col-12 col-xl-7">
                    <div className="row home__plans__select">
                        <div className="col-12 col-md-4">
                            <div className="food__select">
                                <figure className="with-shadow"><img src={plan_1} alt="Meals On Me" /></figure>
                                <label for="checkbox1">Lunch Only</label>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="food__select">
                                <figure className="with-shadow"><img src={plan_2} alt="Meals On Me" /></figure>
                                <label for="checkbox2">Dinner Only</label>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="food__select">
                                <figure className="with-shadow"><img src={plan_3} alt="Meals On Me" /></figure>
                                <label for="checkbox3">Lunch and Dinner</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center my-5">
                    <a className="btn btn-primary btn-lg btn__shadow-red" href="#" role="button">Start your plan now</a>
                </div>
            </div>
        </div>

    )
}

export default HomePlan
