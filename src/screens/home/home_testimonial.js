import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import { testimonial_img_1, testimonial_1, testimonial_2 } from "./../../assets/images"

function HomeTestimonial() {

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    let slider1 = []
    let slider2 = []
    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])


    const testimonial__nav_settings = {
        slidesToShow: 3,
        asNavFor: nav1,
        dots: false,
        centerPadding: '0',
        centerMode: true,
        focusOnSelect: true
    }
    const testimonial__content_settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: nav2
    }
    return (
        <div class="container  skew-bg__grey__top home__testimonial" data-aos="fade-up">
            <div class="row mx-lg-4">
                <div class="col col-md-12 col-lg-5 px-4 d-flex align-items-center">
                    <div class="home__testimonial__text">
                        <h2>
                            <span>Valuable comments</span>
                            Testimonial
                        </h2>
                    </div>
                </div>

                <div class="col col-md-12 col-lg-7 px-4 home__testimonial__content">
                    <img src={testimonial_img_1} className="img-fluid" alt="Meals On Me" />

                    <Slider className="testimonial__content" {...testimonial__content_settings} ref={slider => (slider1 = slider)}>
                        <li>
                            <p className="testimonial__content__item">
                                Always provides quality food with nearest It’s so fresh and delicious and my busy l available best restaurants.
                            </p>
                        </li>
                        <li>
                            <p className="testimonial__content__item">
                                I personally feel that they are very genuine.It’s so fresh and delicious and my busy l It has exciting offers.
                            </p>
                        </li>
                        <li>
                            <p className="testimonial__content__item">
                                I am so happy I discovered you guys! Loved the kale chips, just bought tempura veggies and onion rings.
                            </p>
                        </li>
                        <li>
                            <p className="testimonial__content__item">
                                Thank you for your food. It’s so fresh and delicious and my busy life when it comes to eating.
                            </p>
                        </li>
                        <li>
                            <p className="testimonial__content__item">
                                Tried the raw vegan pizza today and LOVED it!!!! Soooo delicious!!
                            </p>
                        </li>
                    </Slider>

                    <Slider className="testimonial__nav" {...testimonial__nav_settings} ref={slider => (slider2 = slider)}>
                        <li>
                            <div className="testimonial__nav__items">
                                <figure><img src={testimonial_1} className="img-fluid" alt="Meals On Me" /></figure>
                                <span>Catherine</span>
                            </div>
                        </li>

                        <li>
                            <div className="testimonial__nav__items">
                                <figure><img src={testimonial_2} className="img-fluid" alt="Meals On Me" /></figure>
                                <span>Julia Shawd</span>
                            </div>
                        </li>

                        <li>
                            <div className="testimonial__nav__items">
                                <figure><img src={testimonial_1} className="img-fluid" alt="Meals On Me" /></figure>
                                <span>Aabdeen</span>
                            </div>
                        </li>

                        <li>
                            <div className="testimonial__nav__items">
                                <figure><img src={testimonial_2} className="img-fluid" alt="Meals On Me" /></figure>
                                <span>Julia Shawd</span>
                            </div>
                        </li>

                        <li>
                            <div className="testimonial__nav__items">
                                <figure><img src={testimonial_1} className="img-fluid" alt="Meals On Me" /></figure>
                                <span>Aabdeen</span>
                            </div>
                        </li>
                    </Slider>


                </div>

            </div>
        </div>
    )
}

export default HomeTestimonial
