import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import { logo_color } from "./../assets/images"
import LoginComponent from './login_component'
import CommonAction from '../action/common_action'

const Header = () => {
    const dispatch = useDispatch()
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

    return (
        <>
            <header className="header" >
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col d-flex align-items-center">
                            <a href="javascript:void(0);" className="header__logo">
                                <img src={logo_color} className="img-fluid" alt="Meals On Me" />
                            </a>
                        </div>
                        <div className="col-auto header__right">
                            <nav className="header__nav">
                                <ul role="menu">
                                    <li><a href="javascript:void(0);">Our Plan</a></li>
                                    <li><Link to="/weekly-menu">Weekly Menu</Link></li>
                                    <li><a href="javascript:void(0);">Our Story</a></li>
                                    <li><Link to="/how-it-works">How it Works</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </nav>
                            <a href="javascript:void(0);" class="btn btn__login " onClick={(e) => handleLogin(e)} /*  data-toggle="modal" data-target=".login-form" */><i class="far fa-user"></i>Login</a>

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
            <LoginComponent />
        </>
    )
}

export default Header
