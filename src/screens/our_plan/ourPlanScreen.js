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
            <div class="main__content about">
                <div class="banner__holder" data-aos="fade-up">

                    <div class="banner__inner">

                        <h2>Our Plan</h2>

                        <img src={our_plan_header_banner} class="img-fluid" alt="Meals On Me" /> </div>

                </div>

                <div class="container common__text text-center">

                    <h2> <span>Delicious Dishes</span> Kinds of food plans </h2>

                    <p class="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                </div>

                <div class="container home__story lun_din">

                    <div class="row no-gutters justify-content-center">

                        <div class="col-10 col-md-12 order-2 order-lg-1 col-lg-4  home__story__icons our_plan_list">

                            <div class="common__text home__cusines__text">

                                <p class="bold">lunch &amp dinner plans</p>

                                <p class="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <img src="../images/placeholder/red-shape.png" alt="Invest Qatar" class="home__story__img red-shape" data-aos="fade-left" /> <img src="../images/placeholder/red-spiral.png" alt="Invest Qatar" class="home__story__img red-spiral" /> </div>

                            <ul>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . </li>

                            </ul>

                        </div>

                        <div class="col-12 col-md-10 order-lg-2 col-lg-6 home__story__text our_plan_shadow text-center" data-aos="fade-up"> <img src="../images/placeholder/pic-1.png" alt="" class="" data-aos="fade-right" /> </div>

                    </div>

                </div>

                <div class="container common__text text-center">

                    <h2> <span>Delicious Dishes</span> Types of Cuisine </h2>

                    <p class="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <button class="myBtn view">View more <i class="arrow down"></i></button>

                    <div id="myModal" class="modal">

                        <div class="modal-content">

                            <div class="modal-header"> <span class="close">×</span> </div>

                            <div class="modal-body">

                                <div class="container home__story our_plan_cuisine">

                                    <div class="row no-gutters justify-content-center">

                                        <div class="tab">

                                            <button class="tablinks" onClick={(event) => openCity(event, 'indian')} id="defaultOpen">Indian Plan

                                                <div class="divider_white"></div>

                                            </button>

                                            <button class="tablinks" onClick={(event) => openCity(event, 'arabic')}>Arabic Plan

                                                <div class="divider_red"></div>

                                            </button>

                                            <button class="tablinks" onClick={(event) => openCity(event, 'international')}>International Plan

                                                <div class="divider_red"></div>

                                            </button>

                                            <button class="tablinks" onClick={(event) => openCity(event, 'wholesome')}>Wholesome Plan

                                                <div class="divider_red"></div>

                                            </button>

                                            <button class="tablinks" onClick={(event) => openCity(event, 'vegan')}>Vegan/Vegetarian Plan

                                                <div class="divider_red"></div>

                                            </button>

                                            <button class="tablinks" onClick={(event) => openCity(event, 'keto')}>Keto Plan

                                                <div class="divider_red"></div>

                                            </button>

                                            <button class="tablinks" onClick={(event) => openCity(event, 'flex')}>Flex Plan

                                                <div class="divider_red"></div>

                                            </button>

                                        </div>


                                        <div id="indian" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>


                                                </div>

                                            </div>

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                            <p class="start"><b> Starting From:</b></p>

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

                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="arabic" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Arabic Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

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

                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="international" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />International Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

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

                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="wholesome" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Wholesome Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

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

                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="vegan" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Vegan Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

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



                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>



                                        <div id="keto" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Keto Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

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



                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                </div>

                                            </div>

                                        </div>



                                        <div id="flex" class="tabcontent">

                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Flex Features</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="our_shef"> <span class="red_line"></span>

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                            <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                <ul>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                    <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                </ul>

                                                            </span> </div>

                                                    </div>



                                                </div>

                                            </div>



                                            <div class="container">

                                                <div class="row">

                                                    <div class="features_box">

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                            <ul>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                            </ul>

                                                        </div>

                                                        <div class="features">

                                                            <p class="calorie_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

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



                                            <div class="container">

                                                <div class="row">

                                                    <div class="container">

                                                        <p class="how_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                    </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                        delivery time & Checkout </span> </div>

                                                    <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

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

                <div class="container home__story our_plan_calorie calorie_bg">

                    <div class="row">

                        <div class="container common__text text-center">

                            <h2> <span>Eat a high Protein</span> Calorie Counted Plans </h2>

                            <p class="common_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        </div>

                        <div class="col col-md-12 col-lg-7"><img src="../images/placeholder/women.png" alt="women" class="" data-aos="fade-right" /></div>

                        <div class="col col-md-12 col-lg-5 calorie_count">

                            <p class="nos_cal">Upto 1300 calories per day</p>

                            <p class="calorie_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <ul>

                                <li> <span class="day">01</span> <span class="detail">

                                    <h6>'Count-Call' Plan </h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                                </span> </li>

                                <li> <span class="day">02</span> <span class="detail">

                                    <h6>'Klean' Eating Plan </h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                                </span> </li>

                                <li> <span class="day">03</span> <span class="detail">

                                    <h6>'Vegetarian' Plan </h6>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                                </span> </li>

                            </ul>

                            <button class="myBtn view btn_view">View more<i class="arrow down"></i></button>

                        </div>

                        <div id="myModal2" class="modal">

                            <div class="modal2-content">

                                <div class="modal-header"> <span class="close">×</span> </div>

                                <div class="modal-body">

                                    <div class="container count_plan_modal" data-aos="fade-up">

                                        <div data-aos="fade-up">

                                            <div class="profile__pack__holder">

                                                <div class="profile__pack">

                                                    <nav class="nav tab__menu__2 count_call_tab" id="pills-tab" role="tablist"> <a class="nav-link active plan_active" id="nav-upcoming-tab" data-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-1" aria-selected="true"> 'Count-Call' Plan

                                                        <div class="divider_white_center"></div>

                                                    </a> <a class="nav-link plan_hover" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false"> 'Klean' Eating Plan </a> <a class="nav-link plan_hover" id="nav-result-tab" data-toggle="tab" href="#tab-20" role="tab" aria-controls="tab-2" aria-selected="false"> 'Vegetarian' Plan </a> </nav>

                                                </div>

                                                <div class="tab-content tab__content__2 count_call_tab_border">

                                                    <div class="tab-pane fade show active" id="tab-10" role="tabpanel" aria-labelledby="tab-10">

                                                        <div class="container">

                                                            <div class="row">

                                                                <div class="features_box">

                                                                    <div class="features">

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Features</p>

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

                                                                    <div class="our_shef"> <span class="red_line"></span>

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                                        <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                            <ul>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Each cuisine involves food preparation in a particular style, practiced around the world and common to certain countries </li>

                                                                            </ul>

                                                                        </span>

                                                                        <div class="our_shef_sub">

                                                                            <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                                            <ul>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            </ul>

                                                                        </div>

                                                                    </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                        <div class="container">

                                                            <div class="row">

                                                                <div class="features_box">

                                                                    <div class="features">

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <p class="inc">Includes</p>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                        </ul>

                                                                    </div>

                                                                    <div class="features">

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />How it Works</p>

                                                                        <ul>

                                                                            <li>

                                                                                <div class="how_work_ht"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                            <li>

                                                                                <div class="how_work_ht"> <span class="left"><img src="../images/placeholder/icon-2.png" /></span> <span class="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                            <li>

                                                                                <div class="how_work_ht"> <span class="left"><img src="../images/placeholder/icon-3.png" /></span> <span class="right"> Select a plan, preferences,

                                                                                    delivery time & Checkout </span> </div>

                                                                            </li>

                                                                        </ul>

                                                                    </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                    </div>

                                                    <div class="tab-pane fade" id="tab-20" role="tabpanel" aria-labelledby="tab-20">

                                                        <div class="container">

                                                            <div class="row">

                                                                <div class="features_box">

                                                                    <div class="features">

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Features</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                        </ul>

                                                                    </div>

                                                                    <div class="our_shef"> <span class="red_line"></span>

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Our Shef</p>

                                                                        <span class="shef_left"><img src="../images/placeholder/shef.png" /></span> <span class="shef_right">

                                                                            <ul>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Worked at Melia Whitehouse, The Savoy (London) & Melia, Dubai </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Heads Desi Junction & is Managing Partner for other F&B brands </li>

                                                                                <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Excels in presenting Indian cuisine in all its vibrant glory </li>

                                                                            </ul>

                                                                        </span> </div>

                                                                </div>



                                                            </div>

                                                        </div>



                                                        <div class="container">

                                                            <div class="row">

                                                                <div class="features_box">

                                                                    <div class="features">

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Provides</p>

                                                                        <ul>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Iconic dishes picked from across India. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Made with authentic Indian ingredients & traditional cooking methods </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Quality checked dishes made with best & fresh ingredients. </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Dedicated Account Manager to assist you </li>

                                                                            <li> <img src="../images/placeholder/red-circle.jpg" width="12px" /> Fresh delivery at your doorstep</li>

                                                                        </ul>

                                                                    </div>

                                                                    <div class="features">

                                                                        <p class="ht_title"> <img src="../images/placeholder/red-line.jpg" />Pricing</p>

                                                                        <ul>

                                                                            <li>

                                                                                <div class="how_work"> <span class="left"><img src="../images/placeholder/icon-1.png" /></span> <span class="right"> Select a plan, preferences,

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
