import React from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'

import CommonAction from '../action/common_action';

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

const LoginComponent = () => {
    const dispatch = useDispatch()
    const { login_component } = useSelector(state => state.commonReducer);

    const handleLoginCLose = () => {
        dispatch(CommonAction.handleLoginComponent(false))
    }

    return (
        <Modal
            isOpen={login_component}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            overlayClassName="login-form"
        // contentLabel="Example Modal"
        >

            <div class="modal1 show fade" >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" onClick={() => handleLoginCLose()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body login-form-content">
                            <div class="col-12 modal-allergies-tab text-left pb-5">
                                <nav class="nav login-form-modal" id="pills-tab" role="tablist">
                                    <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#log-modaltab1" role="tab" aria-controls="log-modaltab1" aria-selected="true">
                                        Login
                                    </a>
                                    <a class="nav-link" id="nav-result-tab" data-toggle="tab" href="#reg-modaltab1" role="tab" aria-controls="reg-modaltab1" aria-selected="false">
                                        Register
                                    </a>
                                </nav>
                                <div class="tab-content login-form-content text-left py-4">
                                    <div class="tab-pane fade show active" id="log-modaltab1" role="tabpanel" aria-labelledby="log-modaltab1">

                                        <div class="form-group">
                                            <i class="bi bi-person-fill user-stepmodal"></i>
                                            <input type="text" class="form-control" placeholder="First name" />
                                        </div>
                                        <div class="form-group">
                                            <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Login</button>

                                        <div class="col-12 ptb-5">
                                            <a href="javascript:void(0);" class="btn  link-gray" data-toggle="modal" data-target=".resetpassword">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="reg-modaltab1" role="tabpanel" aria-labelledby="reg-modaltab1">
                                        <form>
                                            <div class="form-group">
                                                <i class="bi bi-person-fill user-stepmodal"></i>
                                                <input type="text" class="form-control" placeholder="First name" />
                                            </div>
                                            <div class="form-group">
                                                <i class="bi bi-envelope-fill  user-stepmodal"></i>
                                                <input type="email" class="form-control" placeholder="Email" />
                                            </div>
                                            <div class="form-group">
                                                <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                                                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile Number" />
                                            </div>
                                            <div class="form-group d-flex align-items-center">

                                                <div class="py-1 m-1">
                                                    Location
                                                </div>
                                                <div class="py-1 w-100">
                                                    <select class="custom-select " id="inlineFormCustomSelect">
                                                        <option selected="">Choose..</option>
                                                        <option value="1">Al Barsha</option>
                                                        <option value="2">Marina</option>
                                                        <option value="2">Jumeira</option>
                                                        <option value="2">JLT</option>
                                                        <option value="2">Umm Suquim </option>
                                                        <option value="2">Karama</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div class="form-group">
                                                <div class=" mt-4">
                                                    <textarea placeholder="Address"></textarea>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div class="form-group">
                                                <i class="bi bi-shield-fill-check  user-stepmodal"></i>
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Re-Enter Password" />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Register</button>
                                        </form>




                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default LoginComponent
