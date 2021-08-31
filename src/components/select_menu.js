import React from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'

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
const imageUrl = "http://mealsuae-001-site1.itempurl.com/Images/Plan/"

const SelectMenu = () => {
    const dispatch = useDispatch()
    const { loginData } = useSelector(state => state.userReducer);
    const { menu_component } = useSelector(state => state.commonReducer);
    return (
        <Modal
            isOpen={menu_component}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            overlayClassName=" chooseplan"
        // contentLabel="Example Modal"
        >
            <div class="modal1 show fade ">
                <div class="container-fluid modal-dialog modal-xl w-100">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <h5 class="modal-title text-center select_menu_1h">Please Select your menu</h5>
                        <div class="modal-body">
                            <div class="row d-flex- mx-auto">
                                <div class="col-12 text-center"><h3>Lunch and Dinner Plan</h3></div>
                                <div class="col-12 text-center"><h4>Lunch and Dinner Plan</h4></div>
                            </div>


                            <div class="row mx-auto py-4 text-center profile__pack__item__holder">


                                <div class="col-12 ">
                                    <a href="javascript:void(0);" class="new-btn-prev">((((((</a>
                                    <a href="javascript:void(0);" class="new-btn-next">))))))</a>

                                    <div class="pack-slider col-10 offset-md-2  pt-5">

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">02 / 08 / 2021</p>
                                                <span class="item__day">Su</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">03 / 08 / 2021</p>
                                                <span class="item__day">Mo</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">03 / 08 / 2021</p>
                                                <span class="item__day">Tu</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">02 / 08 / 2021</p>
                                                <span class="item__day">We</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">03 / 08 / 2021</p>
                                                <span class="item__day">Th</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">03 / 08 / 2021</p>
                                                <span class="item__day">Fr</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">04 / 08 / 2021</p>
                                                <span class="item__day bg-grey">Sa</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="profile__pack__item">
                                                <p class="item__date">04 / 08 / 2021</p>
                                                <span class="item__day bg-grey">Su</span>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-2 pt-5 float-left">
                                        <div class="foodtime-icon item__btn">
                                            <img src="../images/weeklymenu/lunch.png" />Lunch
                                        </div>
                                    </div>
                                    <div class="pack-slider col-10 float-left pt-4">

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-2 pt-5 float-left">
                                        <div class="foodtime-icon item__btn">
                                            <img src="../images/weeklymenu/dinner.png" />Dinner
                                        </div>
                                    </div>
                                    <div class="pack-slider col-10 float-left pt-4">

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col plan_modal-item_box">
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card plan-modal-body">
                                                    <div class="text-item">
                                                        <h3>Black bean full with Arabic Bread</h3>
                                                    </div>
                                                    <div class="quantity-check">
                                                        <div class="input-group input-number-group">
                                                            <input class="input-number" type="number" value="1" min="0" max="1000" />
                                                            <div class="input-group-button">
                                                                <span class="input-number-decrement"><i class="bi bi-dash-square"></i></span>
                                                            </div>

                                                            <div class="input-group-button">
                                                                <span class="input-number-increment"><i class="bi bi-plus-square "></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>





                                </div>

                            </div>







                            <div class="row mx-auto py-4 text-center">
                                <div class="col-6 offset-col-md-4 mx-auto">
                                    <div class="alert alert alert-danger" role="alert">
                                        You did’t selected your dish! if don’t want to select now please proceed
                                    </div>
                                    <button type="button" class="btn btn-primary btn-md btn__shadow-red py-3" data-toggle="modal" data-target=".sucssesmenu">Save menu</button>
                                </div>
                            </div>







                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default SelectMenu
