import React from 'react'
import Slider from "react-slick";

import Header from "./../../components/header"
import Footer from "./../../components/footer"
import { about_banner, about_1, about_2, chef_1, chef_2, chef_3, kitchen_1, kitchen_2 } from "./../../assets/images"

const slider_settings = {
    centerMode: false,
    centerPadding: '0',
    slidesToShow: 2,
    infinite: false,
    dots: false,

    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
        }

    }, {

        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
        }

    }]
}


const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="main__content about">

                <div className="banner__holder" data-aos="fade-up">
                    <div className="banner__inner">
                        <h2>About Us</h2>
                        <img src={about_banner} className="img-fluid" alt="Meals On Me" />
                    </div>
                </div>

                <div className="container common__text text-center about-one">
                    <img src={about_1} alt="Meals On Me" className="img-1" data-aos="fade-right" />

                    <h2>
                        <span>Know more</span>
                        Our Story
                    </h2>

                    <p>Make your month a little easier by planning all your meals at one time through Meals on Me. You can easily create your meal plan for the month and save time and money in the process by selecting from over 80 nutritionally flavour some balanced dishes.</p>

                    <p>Meals On Me – is a monthly subscription-based meal plan which was conceived in 2018 by Melvin Rodrigues a Managing Partner of the company who realized that there is a gap in the market for customers who simply want to have delicious healthy and nutritious food – introducing a whole new approach to prepared food. A no-hype, no-hassle meal delivery service for busy people who want to eat well and perform at their best.</p>

                    <p>With the aim to help make happy tummys every day - the platform is offering an array of healthy, wholesome dishes from three different cuisines Indian, Arabic and international; each category is being headed by Dubai -based renowned Chefs like Chef Aatir Dhadlla, Chef Amro Al Yassin and Chef Vanessa Bayma.</p>

                    <p>M.O.M is designed for those who want to maintain a lunch routine with moderation and balance – but without the strict rules or fad diets because for healthy eating to become a way of life, it should be accessible, sustainable, inspiring and above all delicious. Each dish on the menu like our Chicken Stroganoff with Rye bread, Salmon grenobloise with garden vegetables or Grilled Chicken breast with orzo & capsicum – just to name a few, are curated very carefully by our culinary experts using the freshest ingredients available.</p>

                    <img src={about_2} alt="Meals On Me" className="img-2" data-aos="fade-left" />

                </div>

                <div className="about-two">
                    <div className="container about-two__inner">
                        <h4>Offering Freshly, Healthy Nutritious
                            daily meals at your door-steps</h4>
                    </div>
                </div>

                <div className="container common__text text-center about-three">
                    <h2>
                        <span>Healthy foods</span>
                        Why Meals On Me
                    </h2>

                    <p>We at Meals on Me know you are constantly on the go and it can be heard to fit healthy eating into your schedule, but this is when your body and mind needs to be fueled the most. M.O.Ms allows you to go about your day without having to worry about your nutritional needs</p>

                    <p>With Meals on Me you can customize your weekly menu and enjoy delicious, healthy meals. Prepared daily by our culinary experts based on your specific needs and wants, we ensure innovative and delicious menus, top quality dishes and services to ensures that you are fully satisfied with your M.O.Ms experience.</p>

                    <p>M.O.M's specializes in providing gourmet meals at takeaway prices, delivered hot and fresh to your doorstep or your work desk.</p>

                </div>

                <div className="container text-center about-four">
                    <h2> <span>We are here</span> Our Chefs </h2>

                    <div className="row justify-content-center">
                        <div className="col-7 col-lg-4 mb-2 px-lg-5 about-four__item">
                            <div className="content">
                                <figure><img src={chef_1} alt="Meals On Me" /></figure>
                                <h5>Aatir Dhadalla</h5>
                                <h6>Indian Cuisine</h6>
                                <p>Born in 1986 in Mumbai after completing his high school in Physics, chemistry and biology. In 2004 he enrolled himself in a Anjum- Islam college for an affiliated course of Diploma in Culinary Arts from City and Guilds University in Mumbai.</p>
                            </div>
                        </div>

                        <div className="col-7 col-lg-4 mb-2 px-lg-5 about-four__item">
                            <div className="content">
                                <figure><img src={chef_2} alt="Meals On Me" /></figure>
                                <h5>Amro Al Yassin</h5>
                                <h6>Arabic Cuisine</h6>
                                <p>Labelled as the Syrian Taste Maker in Gulf Gourmet magazine, Vice President of the Emirates Culinary Guild and a Certified Judge at the WorldChefs, Amro's reputation defines him as a top leader in our industry.</p>
                            </div>
                        </div>

                        <div className="col-7 col-lg-4 mb-2 px-lg-5 about-four__item">
                            <div className="content">
                                <figure><img src={chef_3} alt="Meals On Me" /></figure>
                                <h5>Vanessa Bayma</h5>
                                <h6>International Cuisine</h6>
                                <p>An award-winning chef, demonstrator, and F&B consultant based in Dubai. Chef Bayma's passion for cooking was born under her Sicilian grandmother's feet as a child and carried on throughout her professional career.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container common__text about-five">

                    <div className="row mx-md-4 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4 text-center">
                            <div className="about-five__text">
                                <h2><span>Meet our</span> OurKitchen</h2>
                                <p>Built in line with international health standards and fully HACCP and ISO22000 certified, our central kitchen is a state-of-the art facility that uses the most up-to-date equipment and cooking methods to deliver high-quality and healthy meals</p>
                            </div>
                        </div>

                        <div className="col-10 col-md-6 col-lg-8">
                            <div className="about-five__slider">
                                <Slider className="about-kitchen" {...slider_settings}>
                                    <li>
                                        <figure className="about-five__slider__item"><img src={kitchen_1} alt="Meals On Me" /></figure>
                                    </li>
                                    <li>
                                        <figure className="about-five__slider__item"><img src={kitchen_2} alt="Meals On Me" /></figure>
                                    </li>
                                    <li>
                                        <figure className="about-five__slider__item"><img src={kitchen_1} alt="Meals On Me" /></figure>
                                    </li>
                                    <li>
                                        <figure className="about-five__slider__item"><img src={kitchen_2} alt="Meals On Me" /></figure>
                                    </li>
                                </Slider>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs
