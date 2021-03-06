import React from 'react'

import { absolute_choose1, absolute_choose2, absolute_choose3, chooseplan_alert } from "./../../assets/images"

const StartTodayPlan = () => {
    return (
        <div className="chooseplan-alert">

            <div className="container">

                <div className="skew-bg__grey__top skew-bg__grey__top-red" data-aos="fade-up">
                    <div className="row chooseplan-alert-inner">
                        <span className="image-effect1" data-aos="fade-up-right"><img src={absolute_choose1} /></span>
                        <span className="image-effect2" data-aos="fade-up-right"><img src={absolute_choose2} /></span>
                        <span className="image-effect3" data-aos="fade-up-right"><img src={absolute_choose3} /></span>
                        <div className="col-md-12 col-12 classimage-absolute">

                            <div className="col-md-6 float-left">
                                <div className="heading-choosplan-alert">
                                    <h1 data-aos="fade-down-right">Start today Choose Your  Plan</h1>
                                    <p data-aos="fade-down-right">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <a data-aos="fade-down-right" href="#">Start Now</a>
                                </div>
                            </div>
                            <div className="col-md-6 float-left">
                                <div className="chooseplan-vector">
                                    <img data-aos="fade-up-right" src={chooseplan_alert} />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartTodayPlan
