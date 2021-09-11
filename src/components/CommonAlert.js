import React from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from "lodash"

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

const CommonAlert = () => {
    const dispatch = useDispatch()
    const { commonAlert } = useSelector(state => state.commonReducer);
    // const handleCloseAddAddress = () => {
    //     dispatch(AddressAction.openAddAddress(false))
    // }
    return (
        <Modal
            isOpen={commonAlert.isVisible}
            style={customStyles}
            overlayClassName=" login-form4"
        >
            <div class="modal1 fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">

                        <div class="modal-body login-form-content">
                            <div class="col-12 modal-allergies-tab text-left py-3">
                                {
                                    !isEmpty(commonAlert.title) && <h2 class="fs-title mb-4">Are you sure you want to Cancel the Meal</h2>
                                }


                                <div class="text-center">
                                    {
                                        commonAlert.buttons.map((item, index) => <button key={index} type="button" class="btn btn-primary d-inline-block" onClick={() => item.action()} >{item.title}</button>)
                                    }
                                    {/* <button type="submit" class="btn btn-primary d-inline-block" >No</button>
                                    <button type="submit" class="btn btn-primary d-inline-block" >Yes</button> */}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CommonAlert
