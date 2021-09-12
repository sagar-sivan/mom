import React from 'react'
import { Link } from "react-router-dom"

import { work_1, work_2, work_3, work_4 } from "./../../assets/images"

function HomeHowWorks() {
    return (
        <div class="container home__works text-center" data-aos="fade-up">
            <h2>
                <span>Delivery</span>
                How it works
            </h2>
            <div class="row mx-2 justify-content-center">
                <div class="col-6 col-lg-3 mb-4">
                    <div class="home__works__items" data-aos="fade-up" data-aos-delay="300">
                        <figure><img src={work_1} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>Select Meal Plan</span>
                    </div>
                </div>

                <div class="col-6 col-lg-3 mb-4">
                    <div class="home__works__items" data-aos="fade-up" data-aos-delay="600">
                        <figure><img src={work_2} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>Select no of weeks</span>
                    </div>
                </div>

                <div class="col-6 col-lg-3 mb-4">
                    <div class="home__works__items" data-aos="fade-up" data-aos-delay="900">
                        <figure><img src={work_3} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>Select menu</span>
                    </div>
                </div>

                <div class="col-6 col-lg-3 mb-4">
                    <div class="home__works__items" data-aos="fade-up" data-aos-delay="1200">
                        <figure><img src={work_4} className="img-fluid" alt="Meals On Me" /></figure>
                        <span>We deliver</span>
                    </div>
                </div>
            </div>
            <div class="col text-center my-1 my-md-5" data-aos="fade-up" data-aos-delay="1200">
                <Link to="/how-it-works" class="btn btn-primary btn-lg btn__shadow-red" role="button">View Details</Link>
            </div>
        </div>
    )
}

export default HomeHowWorks
