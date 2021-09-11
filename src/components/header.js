import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from "react-router-dom"
import { isEmpty } from "lodash"

import { logo_color } from "./../assets/images"
import Authentication from './../screens/authentication/authenticationScreen'
import CommonAction from '../action/common_action'
import UserAction from '../action/user_action'

const Header = (props) => {
    const dispatch = useDispatch()
    const { loginData } = useSelector(state => state.userReducer);
    useEffect(() => {
        const header = document.querySelectorAll('header');
        const scrollToTop = document.getElementsByClassName('scrollup')
        window.addEventListener("scroll", () => {
            if (scrollToTop && scrollToTop[0]) {
                if (window.scrollY > 200) {
                    scrollToTop[0].style.display = 'block';
                } else {
                    scrollToTop[0].style.display = 'none';
                }
            }
            if (header) {
                if (window.scrollY > 100) {
                    header[0].classList.add("toTop");
                } else {
                    header[0].classList.remove("toTop");
                }
            }

        });
        return () => window.removeEventListener("scroll", () => { });
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(CommonAction.handleLoginComponent(true))
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(UserAction.setUserData({}))
        localStorage.removeItem("customerId")
        localStorage.removeItem("customerIdTemp")
        localStorage.removeItem("email")
        props.history.replace("/")
    }

    return (

        <>
            <header className="header" >
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col d-flex align-items-center">
                            <Link to="/" className="header__logo">
                                <img src={logo_color} className="img-fluid" alt="Meals On Me" />
                            </Link>
                        </div>
                        <div className="col-auto header__right">
                            <nav className="header__nav">
                                <ul role="menu">
                                    <li><Link to="/our-plan">Our Plan</Link></li>
                                    <li><Link to="/weekly-menu">Weekly Menu</Link></li>
                                    <li><a href="javascript:void(0);">Our Story</a></li>
                                    <li><Link to="/how-it-works">How it Works</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    {
                                        !isEmpty(loginData) && <li><Link to="/profile">Profile</Link></li>
                                    }

                                </ul>
                            </nav>
                            {
                                isEmpty(loginData) ? <a href="" className="btn btn__login " onClick={(e) => handleLogin(e)} ><i className="far fa-user"></i>Login</a> : <>
                                    {/* <Link to="/profile" className="btn btn__login ">Profile</Link> */}
                                    <a href="" className="btn btn__login " onClick={(e) => handleLogout(e)} ><i className="far fa-user"></i>Logout</a>
                                </>
                            }


                            <a href="javascript:void(0);" className="btn btn__alert">Login</a>

                            <span className="nav__btn" role="button">
                                <span className="bar1"></span>
                                <span className="bar2"></span>
                                <span className="bar3"></span>
                            </span>
                        </div>
                    </div>
                </div>

            </header>
            <Authentication />
        </>
    )
}

export default withRouter(Header)
