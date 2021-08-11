import React from 'react'

import { logo_color } from "./../assets/images"

const Footer = () => {
    return (
        <>
            <footer className="footer container text-center">
                <a href="javascript:void(0);" className="footer__logo">
                    <img src={logo_color} className="img-fluid" alt="Meals On Me" />
                </a>

                <h3 className="mb-4 mt-5 pt-4">Get In touch with us</h3>

                <div className="footer__form">
                    <form>
                        <input placeholder="Enter your Mail Id" type="text" className="form-control" />
                        <a className="btn__footer-form" href="#" role="button">Submit</a>
                    </form>
                </div>

                <nav className="footer__nav">
                    <a href="javascript:void(0);">Redeem Gift Voucher</a>
                    <a href="javascript:void(0);">Terms and Conditions</a>
                    <a href="javascript:void(0);">How it works</a>
                    <a href="javascript:void(0);">Faq</a>
                    <a href="javascript:void(0);">Contact Us</a>
                </nav>

                <p className="footer__copyright">Copyright MealsOnMe &copy;  2021. All rights reserved.</p>
            </footer>

            <a href="#" style={{}} className="scrollup"><i className="fas fa-chevron-up"></i></a>
        </>
    )
}

export default Footer
