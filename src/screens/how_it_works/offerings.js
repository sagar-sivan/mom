import React from 'react'

import { Ellipse_b, tree1, tree2, lady_nots, motor_cyle } from "./../../assets/images"

const Offerings = () => {
    return (
        <div class="chooseplan-alert">

            <div class="container">

                <div class="skew-bg__grey__top skew-bg__grey__top p-0" data-aos="fade-up">
                    <div class="row chooseplan-alert-inner p-0">
                        <span class="image-effect4 aos-init " data-aos="fade-up-right">
                            <img src={Ellipse_b} /></span>

                        <span class="image-effect5 aos-init " data-aos="fade-right">
                            <img src={tree1} /></span>

                        <span class="image-effect6 aos-init " data-aos="fade-right">
                            <img src={tree2} /></span>


                        <div class="col-md-12 col-12 classimage-absolute">
                            <div class="col-md-3 float-left">
                                <div class="chooseplan-vector-auto">
                                    <img data-aos="fade-up-right" src={lady_nots} />
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
                                    <img data-aos="fade-up-left" src={motor_cyle} />
                                </div>

                            </div>



                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Offerings
