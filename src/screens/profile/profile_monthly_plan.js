import React from 'react'

const MonthlyPlan = () => {
    return (
        <div class="container">
            <div class="month-plan">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-3 month-plan__name">
                        <h4>1 Month Plan</h4>
                        <h5>Lunch Only</h5>
                    </div>

                    <div class="col-lg month-plan__plan line-left">
                        <p>
                            Arabic Cuisne
                            <span>Quantity : 2</span>
                        </p>
                        <a href="javascript:void(0);" class="btn__add-plan">Add Plan</a>
                    </div>

                    <div class="col-12 col-lg-5 month-plan__day line-left">
                        <p>
                            <strong>25</strong>
                            <span>
                                Days left
                                <a href="javascript:void(0);" class="btn__add-plan">Add more Days</a>
                            </span>
                        </p>
                        <ul>
                            <li><span class="icon-date">Start date</span> 01 August 2021</li>
                            <li><span class="icon-date">Expiry date</span> 31 July 2021</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="month-plan">
                <div class="row">
                    <div class="col-12 col-lg-3 month-plan__name">
                        <h4>1 Month Plan</h4>
                        <h5>Special Plan</h5>
                    </div>

                    <div class="col-lg month-plan__plan line-left">
                        <p>
                            KLEAN Eating
                            <span>Quantity : 2</span>
                        </p>
                        <a href="javascript:void(0);" class="btn__add-plan">Add Plan</a>
                    </div>

                    <div class="col-12 col-lg-5 month-plan__day line-left">
                        <p>
                            <strong>07</strong>
                            <span>
                                Days left
                                <a href="javascript:void(0);" class="btn__add-plan">Add more Days</a>
                            </span>
                        </p>
                        <ul>
                            <li><span>Start date</span> 01 August 2021</li>
                            <li><span>Expiry date</span> 31 July 2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonthlyPlan
