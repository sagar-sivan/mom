import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { howit_banner, ab_1, ab_2, ab_3, ab_4 } from "./../../assets/images"

const HowItWorks = () => {
    return (
        <>
            <Header />
            <div class="main__content about">
                <div class="banner__holder" data-aos="fade-up">
                    <div class="banner__inner">
                        <h2>How it Works</h2>
                        <img src={howit_banner} class="img-fluid" alt="Meals On Me" />
                    </div>
                </div>
                <div class="container" data-aos="fade-up">
                    <div class="col-md-12 col-12 pt-3 mt-3  mb-5 pb-3">
                        <h2 class="text-center">
                            <span>Know more</span>
                            Meal daily to your door or desk
                        </h2>
                    </div>

                    <div class="col-md-12 col-sm-12 col-lg-12 HIW py-5" data-aos="fade-up">
                        <div class="col-md-4 col-sm-12">
                            <div class="img-responsive">
                                <img src={ab_1} />
                            </div>
                        </div>

                        <div class="col-md-8 col-sm-12">
                            <div class="box-p-style">
                                <h2>Select your plan</h2>
                                <p>Browse our range of plans, International, Arabic, Indian or Flex, select the plan based on your preferences. Custom build your menu for the week by selecting your
                                    favorite dishes from our full M.O.M’s menu, our team will craft your schedule for your approval.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12 col-lg-12 HIW py-5" data-aos="fade-up">


                        <div class="col-md-8 col-sm-12">
                            <div class="box-p-style">
                                <h2>Check out</h2>
                                <p>Complete your order online via our website or through our WhatsApp. There is an option for payment
                                    through cash on delivery or through our online payments through our website.</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <div class="img-responsive">
                                <img src={ab_2} />
                            </div>
                        </div>
                    </div>


                    <div class="col-md-12 col-sm-12 col-lg-12 HIW py-5" data-aos="fade-up">
                        <div class="col-md-4 col-sm-12">
                            <div class="img-responsive">
                                <img src={ab_3} />
                            </div>
                        </div>

                        <div class="col-md-8 col-sm-12">
                            <div class="box-p-style">
                                <h2>We Deliver</h2>
                                <p>Simply specify your delivery location or locations this could be either your home address or office address or both if you are in between.
                                    Our friendly drivers will deliver your meal daily to your door or desk.</p>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-12 col-sm-12 col-lg-12 HIW py-5" data-aos="fade-up">


                        <div class="col-md-8 col-sm-12">
                            <div class="box-p-style">
                                <h2>You Receive</h2>
                                <p>Our dedicated M.O.M’s will assist and support you during your entire
                                    plan and help with any questions or requests you may have.</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <div class="img-responsive">
                                <img src={ab_4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chooseplan-alert">

                    <div class="container">

                        <div class="skew-bg__grey__top skew-bg__grey__top p-0" data-aos="fade-up">
                            <div class="row chooseplan-alert-inner p-0">
                                <span class="image-effect4 aos-init " data-aos="fade-up-right">
                                    <img src="../images/how-it-works/Ellipse-b.png" /></span>

                                <span class="image-effect5 aos-init " data-aos="fade-right">
                                    <img src="../images/how-it-works/tree1.png" /></span>

                                <span class="image-effect6 aos-init " data-aos="fade-right">
                                    <img src="../images/how-it-works/tree2.png" /></span>


                                <div class="col-md-12 col-12 classimage-absolute">
                                    <div class="col-md-3 float-left">
                                        <div class="chooseplan-vector-auto">
                                            <img data-aos="fade-up-right" src="../images/how-it-works/lady-nots.png" />
                                        </div>

                                    </div>
                                    <div class="col-md-6 float-left">
                                        <div class="heading-list py-5">

                                            <ul>

                                                <li data-aos="fade-down"><i class="bi bi-check-circle"></i>Freshly prepared in our kitchen</li>
                                                <li data-aos="fade-down"><i class="bi bi-check-circle"></i>Offering all your favourite dishes</li>

                                                <li data-aos="fade-down"><i class="bi bi-check-circle"></i>Get fit and healthy with our special meal plans</li>
                                                <li data-aos="fade-down"><i class="bi bi-check-circle"></i>Get fit and healthy with our special meal plans</li>

                                                <li data-aos="fade-down"><i class="bi bi-check-circle"></i>Tailored to your specific dietary requirements</li>

                                            </ul>

                                        </div>

                                    </div>

                                    <div class="col-md-3 float-left">
                                        <div class="chooseplan-vector-auto absolite-moto">
                                            <img data-aos="fade-up-left" src="../images/how-it-works/motor-cyle.png" />
                                        </div>

                                    </div>



                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default HowItWorks
