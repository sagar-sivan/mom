import React, { useState } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoaderAction from '../../action/loader_action';
import ProfileAction from '../../action/profile_action';
import { networkRequest } from "../../http/api"
import { api_url, urlConfig } from "../../http/apiConfig"
import { emailValidate } from "./../../constant/common"

Modal.setAppElement('body');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const EditProfile = () => {
    const dispatch = useDispatch()
    const { paymentSummary } = useSelector(state => state.commonReducer);


    return (
        <Modal
            isOpen={paymentSummary.isVisible}
            style={customStyles}
            overlayClassName=" view-summary"
        >
            <div class="modal1 fade show" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-12 py-3 text-center">
                            <h5 class="modal-title" id="exampleModalLongTitle">View Summary</h5>
                        </div>

                        <div class="modal-body">

                            <div class="col-12 py-1">
                                <div class="view-summary-box mx-auto">
                                    <div class="col-6">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Order No.</th>
                                                    <td>6680</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Meal Plan Selected</th>
                                                    <td>Lunch Only</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Cusine Selected</th>
                                                    <td>Indian Meal</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Quantity</th>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Schedule</th>
                                                    <td>5 Days a Week (Sat,Sun,.)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Duration</th>
                                                    <td>Trial Week</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Start Date</th>
                                                    <td>24 / 08 / 2021</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div class="col-6">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Amount</th>
                                                    <td>1200 AED</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Status</th>
                                                    <td>Paid</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Allergies</th>
                                                    <td> Milk , Milk products, Nuts</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"></th>
                                                    <td>Reduce oil</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address</th>
                                                    <td>City:Dubai State/province/area :Dubai</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="col-12 text-center py-5">
                                            <h4>Your Payment  is sucssesfull</h4>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary btnsm btn__shadow-red py-1" data-toggle="modal" data-target=".chooseplan">Select menu</button>

                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default EditProfile
