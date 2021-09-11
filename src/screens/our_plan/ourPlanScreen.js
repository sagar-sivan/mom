import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { our_plan_header_banner } from "./../../assets/images"



const OurPlanScreen = () => {
    const openCity = (evt, cityName) => {

        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {

            tabcontent[i].style.display = "none";

        }

        tablinks = document.getElementsByClassName("tablinks");

        for (i = 0; i < tablinks.length; i++) {

            tablinks[i].className = tablinks[i].className.replace(" active", "");

        }

        document.getElementById(cityName).style.display = "block";

        evt.currentTarget.className += " active";

    }

    return (
        <>
            <Header />
            <div className="main__content about">
                <div className="banner__holder" data-aos="fade-up">

                    <div className="banner__inner">

                        <h2>Our Plan</h2>

                        <img src={our_plan_header_banner} className="img-fluid" alt="Meals On Me" /> </div>

                </div>

                <div className="container common__text text-center">

                    <h2> <span>Delicious Dishes</span> Kinds of food plans </h2>

                    <p className="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                </div>

                <div className="container home__story lun_din">

                    <div className="row no-gutters justify-content-center">

                        <div className="col-10 col-md-12 order-2 order-lg-1 col-lg-4  home__story__icons our_plan_list">

                            <div className="common__text home__cusines__text">

                                <p className="bold">lunch &amp dinner plans</p>

                                <p className="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <img src="../images/placeholder/red-shape.png" alt="Invest Qatar" className="home__story__img red-shape" data-aos="fade-left" /> <img src="../images/placeholder/red-spiral.png" alt="Invest Qatar" className="home__story__img red-spiral" /> </div>

                            <ul>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                            </ul>

                        </div>

                        <div className="col-12 col-md-10 order-lg-2 col-lg-6 home__story__text our_plan_shadow text-center" data-aos="fade-up"> <img src="../images/placeholder/pic-1.png" alt="" className="" data-aos="fade-right" /> </div>

                    </div>

                </div>

                <div className="container common__text text-center">

                    <h2> <span>Delicious Dishes</span> Types of Cuisine </h2>

                    <p className="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <button className="myBtn view">View more <i className="arrow down"></i></button>

                    <div id="myModal" className="modal">

                        <div className="modal-content">

                            <div className="modal-header"> <span className="close">×</span> </div>

                            <div className="modal-body">

                                <div className="container home__story our_plan_cuisine">

                                    <div className="row no-gutters justify-content-center">

                                        <div className="tab">

                                            <button className="tablinks" onClick={(event) => openCity(event, 'indian')} id="defaultOpen">Indian Plan

                                                <div className="divider_white"></div>

                                            </button>

                                            <button className="tablinks" onClick={(event) => openCity(event, 'arabic')}>Arabic Plan

                                                <div className="divider_red"></div>

                                            </button>

                                            <button className="tablinks" onClick={(event) => openCity(event, 'international')}>International Plan

                                                <div className="divider_red"></div>

                                            </button>

                                            <button className="tablinks" onClick={(event) => openCity(event, 'wholesome')}>Wholesome Plan

                                                <div className="divider_red"></div>

                                            </button>

                                            <button className="tablinks" onClick={(event) => openCity(event, 'vegan')}>Vegan/Vegetarian Plan

                                                <div className="divider_red"></div>

                                            </button>

                                            <button className="tablinks" onClick={(event) => openCity(event, 'keto')}>Keto Plan

                                                <div className="divider_red"></div>

                                            </button>

                                            <button className="tablinks" onClick={(event) => openCity(event, 'flex')}>Flex Plan

                                                <div className="divider_red"></div>

                                            </button>

                                        </div>


                                        <div id="indian" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>


                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p className="start"><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="arabic" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Arabic Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="international" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />International Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="wholesome" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Wholesome Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="vegan" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Vegan Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>



                                        <div id="keto" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Keto Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>



                                        <div id="flex" className="tabcontent">

                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Flex Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="our_shef"> <span className="red_line"></span>

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div className="container">

                                                <div className="row">

                                                    <div className="features_box">

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div className="features">

                                                            <p className="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p><b> Starting From:</b></p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div className="container">

                                                <div className="row">

                                                    <div className="container">

                                                        <p className="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>



                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="container home__story our_plan_calorie calorie_bg">

                    <div className="row">

                        <div className="container common__text text-center">

                            <h2> <span>Eat a high Protein</span> Calorie Counted Plans </h2>

                            <p className="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        </div>

                        <div className="col col-md-12 col-lg-7"><img src="../images/placeholder/women.png" alt="women" className="" data-aos="fade-right" /></div>

                        <div className="col col-md-12 col-lg-5 calorie_count">

                            <p className="nos_cal">Upto 1300 calories per day</p>

                            <p className="calorie_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <ul>

                                <li> <span className="day">01</span> <span className="detail">

                                    <h6>'Count-Call' Plan </h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                                </span> </li>

                                <li> <span className="day">02</span> <span className="detail">

                                    <h6>'Klean' Eating Plan </h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                                </span> </li>

                                <li> <span className="day">03</span> <span className="detail">

                                    <h6>'Vegetarian' Plan </h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                                </span> </li>

                            </ul>

                            <button className="myBtn view btn_view">View more<i className="arrow down"></i></button>

                        </div>

                        <div id="myModal2" className="modal">

                            <div className="modal2-content">

                                <div className="modal-header"> <span className="close">×</span> </div>

                                <div className="modal-body">

                                    <div className="container count_plan_modal" data-aos="fade-up">

                                        <div data-aos="fade-up">

                                            <div className="profile__pack__holder">

                                                <div className="profile__pack">

                                                    <nav className="nav tab__menu__2 count_call_tab" id="pills-tab" role="tablist"> <a className="nav-link active plan_active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-1" aria-selected="true"> 'Count-Call' Plan

                                                        <div className="divider_white_center"></div>

                                                    </a> <a className="nav-link plan_hover" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false"> 'Klean' Eating Plan </a> <a className="nav-link plan_hover" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false"> 'Vegetarian' Plan </a> </nav>

                                                </div>

                                                <div className="tab-content tab__content__2 count_call_tab_border">

                                                    <div className="tab-pane fade show active" id="tab-10" role="tabpanel" aria-labelledby="tab-10">

                                                        <div className="container">

                                                            <div className="row">

                                                                <div className="features_box">

                                                                    <div className="features">

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Features</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                        </ul>

                                                                    </div>

                                                                    <div className="our_shef"> <span className="red_line"></span>

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                                        <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                            <ul>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Each cuisine involves food preparation in a particular style, practiced around the world and common to certain countries </li>

                                                                            </ul>

                                                                        </span>

                                                                        <div className="our_shef_sub">

                                                                            <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                                            <ul>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            </ul>

                                                                        </div>

                                                                    </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                        <div className="container">

                                                            <div className="row">

                                                                <div className="features_box">

                                                                    <div className="features">

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <p className="inc">Includes</p>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                        </ul>

                                                                    </div>

                                                                    <div className="features">

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                                        <ul>

                                                                            <li>

                                                                                <div className="how_work_ht"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                            <li>

                                                                                <div className="how_work_ht"> <span className="left"><img src="../images/placeholder/icon-2.png" /></span> <span className="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                            <li>

                                                                                <div className="how_work_ht"> <span className="left"><img src="../images/placeholder/icon-3.png" /></span> <span className="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                        </ul>

                                                                    </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                    </div>

                                                    <div className="tab-pane fade" id="tab-20" role="tabpanel" aria-labelledby="tab-20">

                                                        <div className="container">

                                                            <div className="row">

                                                                <div className="features_box">

                                                                    <div className="features">

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Features</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                        </ul>

                                                                    </div>

                                                                    <div className="our_shef"> <span className="red_line"></span>

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                                        <span className="shef_left"><img src="../images/placeholder/shef.png" /></span> <span className="shef_right">

                                                                            <ul>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                            </ul>

                                                                        </span> </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                        <div className="container">

                                                            <div className="row">

                                                                <div className="features_box">

                                                                    <div className="features">

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                        </ul>

                                                                    </div>

                                                                    <div className="features">

                                                                        <p className="ht_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                                        <ul>

                                                                            <li>

                                                                                <div className="how_work"> <span className="left"><img src="../images/placeholder/icon-1.png" /></span> <span className="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                        </ul>

                                                                    </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default OurPlanScreen
