import React, { useEffect } from 'react'
import Slider from "react-slick";

import { banner_1, banner_bg_1 } from "./../../assets/images"
var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
};
function HomeBanner() {

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
    return (
        <div className="banner__holder" data-aos="fade-up">
            <Slider className="homebanner" {...settings}>
                <div>
                    <div className="banner__item">
                        <div className="container banner__content">
                            <div className="row no-gutters justify-content-center">
                                <div className="col col-md-4 col-lg-6 col-xl-7 banner__img">
                                    <img src={banner_1} alt="Invest Qatar" />
                                </div>

                                <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-5 banner__form__holder">
                                    <h2>Offering Freshly, Healthy Nutritious <strong>daily meals at your door-steps</strong></h2>

                                    <div className="banner__form">
                                        <form>
                                            <div className="form-group">
                                                <input placeholder="First Name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Last Name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Email" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Phone Number" type="text" className="form-control" />
                                            </div>
                                            <a className="btn btn__started" href="#" role="button">Get Started</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <figure><img src={banner_bg_1} alt="Invest Qatar" /></figure>
                    </div>
                </div>

                <div>
                    <div className="banner__item">
                        <div className="container banner__content">
                            <div className="row no-gutters justify-content-center">
                                <div className="col col-md-4 col-lg-6 col-xl-7 banner__img">
                                    <img src={banner_1} alt="Invest Qatar" />
                                </div>

                                <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-5 banner__form__holder">
                                    <h2>Offering Freshly, Healthy Nutritious <strong>daily meals at your door-steps</strong></h2>

                                    <div className="banner__form">
                                        <form>
                                            <div className="form-group">
                                                <input placeholder="First Name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Last Name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Email" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Phone Number" type="text" className="form-control" />
                                            </div>
                                            <a className="btn btn__started" href="#" role="button">Get Started</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <figure><img src={banner_bg_1} alt="Invest Qatar" /></figure>
                    </div>
                </div>

                <div>
                    <div className="banner__item">
                        <div className="container banner__content">
                            <div className="row no-gutters justify-content-center">
                                <div className="col col-md-4 col-lg-6 col-xl-7 banner__img">
                                    <img src={banner_1} alt="Invest Qatar" />
                                </div>

                                <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-5 banner__form__holder">
                                    <h2>Offering Freshly, Healthy Nutritious <strong>daily meals at your door-steps</strong></h2>

                                    <div className="banner__form">
                                        <form>
                                            <div className="form-group">
                                                <input placeholder="First Name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Last Name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Email" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Phone Number" type="text" className="form-control" />
                                            </div>
                                            <a className="btn btn__started" href="#" role="button">Get Started</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <figure><img src={banner_bg_1} alt="Invest Qatar" /></figure>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default HomeBanner
