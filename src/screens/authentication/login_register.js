import React from 'react'
import Register from './register';
import Login from './login';

const LoginRegister = () => {

    return (
        <>
            <nav className="nav login-form-modal" id="pills-tab" role="tablist">
                <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#log-modaltab1" role="tab" aria-controls="log-modaltab1" aria-selected="true">
                    Login
                </a>
                <a className="nav-link" id="nav-result-tab" data-toggle="tab" href="#reg-modaltab1" role="tab" aria-controls="reg-modaltab1" aria-selected="false">
                    Register
                </a>
            </nav>
            <div className="tab-content login-form-content text-left py-4">
                <Login />
                <Register />
            </div>
        </>
    )
}

export default LoginRegister
