import React from 'react'

import { logo_color } from "./../assets/images"

const Header = () => {
    return (
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
                                <li><a href="javascript:void(0);">Weekly Menu</a></li>
                                <li><a href="javascript:void(0);">Our Story</a></li>
                                <li><a href="javascript:void(0);">How it Works</a></li>
                                <li><a href="javascript:void(0);">Contact Us</a></li>
                            </ul>
                        </nav>
                        <a href="javascript:void(0);" className="btn btn__login"><i className="far fa-user"></i>Login</a>

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
    )
}

export default Header
