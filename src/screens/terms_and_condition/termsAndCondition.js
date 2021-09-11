import React from 'react'

import Header from "./../../components/header"
import Footer from "./../../components/footer"
import { t_and_c } from "./../../assets/images"

const TermsAndCondition = () => {
    return (
        <>
            <Header />
            <div className="main__content about">
                <div className="banner__holder" data-aos="fade-up">
                    <div className="banner__inner">
                        <h2>Terms & Conditions</h2>
                        <img src={t_and_c} className="img-fluid" alt="Meals On Me" />
                    </div>
                </div>

                <div className="container" data-aos="fade-up">

                    <div className="col-md-12 col-sm-12 col-lg-12 contact-page py-5">
                        <div className="col-md-12 col-12  mt-2  mb-2 ">
                            <h2 className="text-center">
                                <span>Know more</span>
                                Definitions
                            </h2>
                        </div>
                        <div className="col-md-12 col-12  mb-2 display_1_list">
                            <ul>
                                <li>
                                    <p>Meals On Me - MOMs refers to the meal plan provider.</p>
                                </li>
                                <li>
                                    <p>Meal Plan as used in this general T&C refers to the main product and service purchased by the customer from MOMS; also refers to the copy provided to client either by email or online
                                        as reference for the dishes that they will receive for the duration of their plan.</p>
                                </li>
                                <li>
                                    <p>
                                        Dashboard refers to the online client portal that allows
                                        him/her to manage his/her account and is accessible at <a href="www.hellomealsonme.com">www.hellomealsonme.com</a>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-12 col-12  mt-5 mb-5 ">
                            <h2 className="text-center">
                                Conditions
                            </h2>
                        </div>

                        <div className="col-md-12 col-12  mb-2 display_1_list">
                            <ul>
                                <li>
                                    <p>All clients who have completed their online sign up are deemed to have agreed to these terms and conditions from their
                                        registration until the end of their plan and also upon renewal.</p>
                                </li>
                                <li>
                                    <p>
                                        MOM’s reserves the right to refuse a client under the following cases:
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-12 col-12  mt-5 mb-5 ">
                            <h2 className="text-center">Payments, Prices, Fees</h2>
                        </div>

                        <div className="col-md-12 col-12  mb-2 display_1_list">
                            <ul>
                                <li>
                                    <p>Full payment must be received 3 business days before the desired start date
                                        for either new or renewed meal plan otherwise food delivery will not proceed.</p>
                                </li>
                                <li>
                                    <p>
                                        Payments can be made online through client dashboard or offline through cash on delivery.
                                    </p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsAndCondition
