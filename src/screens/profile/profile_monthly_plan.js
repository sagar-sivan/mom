import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"
import moment from "moment"

import CommonAction from "./../../action/common_action"

const MonthlyPlan = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.profileReducer);

    const handleMenuOpen = (OrderId, planId, CuisineId) => {
        dispatch(CommonAction.handleMenuComponent({
            isVisible: true,
            OrderId,
            planId,
            CuisineId
        }))
    }


    if (!isEmpty(userData) && userData.customerPlanList && userData.customerPlanList.length > 0) {
        return (
            <div className="container">
                {
                    userData.customerPlanList.map(item => {
                        return (
                            <div className="month-plan" onClick={() => handleMenuOpen(item.orderId, item.planId, item.cuisineId)}>
                                <div className="row">
                                    <div className="col-12 col-sm-7 col-md-6 col-lg-3 month-plan__name">
                                        <h4>{item.planDuration}</h4>
                                        <h5>{item.planName}</h5>
                                        <p>order No: {item.orderId}</p>
                                    </div>

                                    <div className="col col-lg month-plan__plan line-left">
                                        <p>
                                            {item.cusineName}
                                            <span>Quantity :  {item.quantity}</span>
                                        </p>
                                    </div>

                                    <div className="col-12  col-md-12 col-lg-5 month-plan__day line-left">
                                        <p>
                                            <strong>{item.remainingDays}</strong>
                                            <span>
                                                Days left
                                            </span>
                                        </p>
                                        <ul>
                                            <li><span className="icon-date">Start date</span> {moment(item.startDate, 'DD/MM/YYYY').format('DD MMMM YYYY')}</li>
                                            <li><span className="icon-date">Expiry date</span> {moment(item.expiryDate, 'DD/MM/YYYY').format('DD MMMM YYYY')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            // <div className="month-plan">
                            //     <div className="row align-items-center">
                            //         <div className="col-12 col-lg-3 month-plan__name">
                            //             <h4>{item.planDuration}</h4>
                            //             <h5>{item.planName}</h5>
                            //         </div>

                            //         <div className="col-lg month-plan__plan line-left">
                            //             <p>
                            //                 {item.cusineName}
                            //                 <span>Quantity : {item.quantity}</span>
                            //             </p>
                            //             <a href="javascript:void(0);" className="btn__add-plan">Add Plan</a>
                            //         </div>

                            //         <div className="col-12 col-lg-5 month-plan__day line-left">
                            //             <p>
                            //                 <strong>25</strong>
                            //                 <span>
                            //                     Days left
                            //                     <a href="javascript:void(0);" className="btn__add-plan">Add more Days</a>
                            //                 </span>
                            //             </p>
                            //             <ul>
                            //                 <li><span className="icon-date">Start date</span> {moment(item.startDate, 'DD/MM/YYYY').format('DD MMMM YYYY')}</li>
                            //                 <li><span className="icon-date">Expiry date</span> {moment(item.expiryDate, 'DD/MM/YYYY').format('DD MMMM YYYY')}</li>
                            //             </ul>
                            //         </div>
                            //     </div>
                            // </div>

                        )
                    })
                }
                {/* <div className="month-plan">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-3 month-plan__name">
                            <h4>1 Month Plan</h4>
                            <h5>Lunch Only</h5>
                        </div>

                        <div className="col-lg month-plan__plan line-left">
                            <p>
                                Arabic Cuisne
                                <span>Quantity : 2</span>
                            </p>
                            <a href="javascript:void(0);" className="btn__add-plan">Add Plan</a>
                        </div>

                        <div className="col-12 col-lg-5 month-plan__day line-left">
                            <p>
                                <strong>25</strong>
                                <span>
                                    Days left
                                    <a href="javascript:void(0);" className="btn__add-plan">Add more Days</a>
                                </span>
                            </p>
                            <ul>
                                <li><span className="icon-date">Start date</span> 01 August 2021</li>
                                <li><span className="icon-date">Expiry date</span> 31 July 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="month-plan">
                    <div className="row">
                        <div className="col-12 col-lg-3 month-plan__name">
                            <h4>1 Month Plan</h4>
                            <h5>Special Plan</h5>
                        </div>

                        <div className="col-lg month-plan__plan line-left">
                            <p>
                                KLEAN Eating
                                <span>Quantity : 2</span>
                            </p>
                            <a href="javascript:void(0);" className="btn__add-plan">Add Plan</a>
                        </div>

                        <div className="col-12 col-lg-5 month-plan__day line-left">
                            <p>
                                <strong>07</strong>
                                <span>
                                    Days left
                                    <a href="javascript:void(0);" className="btn__add-plan">Add more Days</a>
                                </span>
                            </p>
                            <ul>
                                <li><span>Start date</span> 01 August 2021</li>
                                <li><span>Expiry date</span> 31 July 2021</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    } else {
        return null
    }

}

export default MonthlyPlan
