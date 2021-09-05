import React from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

import CommonAction from '../../action/common_action';
import LoginRegister from "./login_register"

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
                                <LoginRegister />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default LoginComponent
