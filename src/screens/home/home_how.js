import React from 'react'

import { work_1, work_2, work_3, work_4 } from "./../../assets/images"

function HomeHowWorks() {
    return (
        <div className="container home__works text-center">
            <h2>
                <span>Delivery</span>
                How it works
            </h2>
            <div className="row mx-2 justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4">
                    <div className="home__works__items">
                        <figure><img src={work_1} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>Select Meal Plan</span>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4">
                    <div className="home__works__items">
                        <figure><img src={work_2} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>Select no of weeks</span>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4">
                    <div className="home__works__items">
                        <figure><img src={work_3} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>Select menu</span>
                    </div>
                </div>

                <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4">
                    <div className="home__works__items">
                        <figure><img src={work_4} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>We deliver</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeHowWorks
