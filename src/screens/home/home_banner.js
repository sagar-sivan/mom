import React, { useEffect } from 'react'
import Slider from "react-slick";

import { banner_1, banner_bg_1 } from "./../../assets/images"
import BannerForm from './banner_form';

var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
};
function HomeBanner() {

    useEffect(() => {

    }, [])
    return (
        <div className="banner__holder" >
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

                                    <BannerForm />
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

                                    <BannerForm />
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

                                    <BannerForm />
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
