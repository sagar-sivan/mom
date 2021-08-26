import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { weekly, weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7, dinner, brakefast, AMsnack, lunch } from "./../../assets/images"

const WeeklyMenu = () => {
    return (
        <>
            <Header />
            <div class="main__content about">

                <div class="banner__holder" data-aos="fade-up">
                    <div class="banner__inner">
                        <h2>Weekly menu</h2>
                        <img src={weekly} class="img-fluid" alt="Meals On Me" />
                    </div>
                </div>

                <div class="lunch-plan-section ">
                    <div class="container" data-aos="fade-up">
                        <div class="col-md-12 col-12">
                            <h2 class="text-center mb-5 pb-5">
                                <span>Weeks Top Menu Dishes </span>
                                Lunch & Dinner Plan
                            </h2>

                        </div>
                        <div class="col-md-12 col-12 no-gutters-sm">
                            <div class="skew-bg__grey__top" data-aos="fade-up">

                                <div class="weektable-space ">
                                    <div class="weektable-menu">
                                        <nav class="nav " id="pills-tab" role="tablist">
                                            <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#thisweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                                This week
                                            </a>
                                            <a class="nav-link " id="nav-upcoming-tab" data-toggle="tab" href="#nextweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                                Next week
                                            </a>
                                            <div class="date-duration">
                                                <h3>02nd August 2021<span> to</span> 08th August 2021</h3>
                                            </div>
                                        </nav>
                                    </div>

                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="thisweek" role="tabpanel" aria-labelledby="a">
                                            <div class="space-plan weektable__pack">

                                                <nav class="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                    <a class="nav-link active" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Indian <br />Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Arabic<br /> Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        International<br /> Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Wholesome<br />
                                                        Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Vegetarian / Vegan<br />
                                                        Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        KETO<br />
                                                        Meal Plan</a>
                                                </nav>

                                            </div>

                                            <div class="tab-content  tab__content__2">
                                                <div class="tab-pane fade show active" id="plan-In" role="tabpanel" aria-labelledby="a">
                                                    <div class="weektable table-responsive" id="timetable">
                                                        <table class="table_template">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Monday</th>
                                                                    <th scope="col">Tuesday</th>
                                                                    <th scope="col">Wednesday</th>
                                                                    <th scope="col">Thursday</th>
                                                                    <th scope="col">Friday</th>
                                                                    <th scope="col">Saturday</th>
                                                                    <th scope="col">Sunday</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="item-weekfood">


                                                                <tr>
                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item1} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item2} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item3} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item4} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item5} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item6} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item7} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="plan-Ar" role="tabpanel" aria-labelledby="a">
                                                    <div class="weektable table-responsive" id="timetable">
                                                        <table class="table_template">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Monday</th>
                                                                    <th scope="col">Tuesday</th>
                                                                    <th scope="col">Wednesday</th>
                                                                    <th scope="col">Thursday</th>
                                                                    <th scope="col">Friday</th>
                                                                    <th scope="col">Saturday</th>
                                                                    <th scope="col">Sunday</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="item-weekfood">


                                                                <tr>
                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item1} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item2} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item3} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item4} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item5} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item6} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item7} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                        <div class="tab-pane fade" id="nextweek" role="tabpanel" aria-labelledby="a">
                                            <div class="space-plan weektable__pack">
                                                <nav class="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                    <a class="nav-link active" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Indian <br />Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Arabic<br /> Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        International<br /> Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Wholesome<br />
                                                        Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        Vegetarian / Vegan<br />
                                                        Meal Plan</a>
                                                    <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                        KETO<br />
                                                        Meal Plan</a>
                                                </nav>

                                            </div>

                                            <div class="tab-content  tab__content__2">
                                                <div class="tab-pane fade show active" id="plan-In2" role="tabpanel" aria-labelledby="a">
                                                    <div class="weektable table-responsive" id="timetable">
                                                        <table class="table_template">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Monday</th>
                                                                    <th scope="col">Tuesday</th>
                                                                    <th scope="col">Wednesday</th>
                                                                    <th scope="col">Thursday</th>
                                                                    <th scope="col">Friday</th>
                                                                    <th scope="col">Saturday</th>
                                                                    <th scope="col">Sunday</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="item-weekfood">


                                                                <tr>
                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item1} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item2} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item3} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item4} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item5} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item6} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item7} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="plan-Ar2" role="tabpanel" aria-labelledby="a">
                                                    <div class="weektable table-responsive" id="timetable">
                                                        <table class="table_template">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Monday</th>
                                                                    <th scope="col">Tuesday</th>
                                                                    <th scope="col">Wednesday</th>
                                                                    <th scope="col">Thursday</th>
                                                                    <th scope="col">Friday</th>
                                                                    <th scope="col">Saturday</th>
                                                                    <th scope="col">Sunday</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="item-weekfood">


                                                                <tr>
                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item1} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item2} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item3} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item4} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item5} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item6} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div class="col">
                                                                            <img src={weekly_item7} />
                                                                            <p>Yellow Spice Dory
                                                                                with Baked Pototo
                                                                            </p>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
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

                <div class="container" data-aos="fade-up">
                    <div class="col-md-12 col-12">
                        <h2 class="text-center mb-5 pb-5">
                            <span>Weeks Top Menu Dishes </span>
                            Calorie Counted Plans
                        </h2>

                        <div class="skew-bg__grey__bottom" data-aos="fade-up">

                            <div class="weektable-space ">
                                <div class="weektable-menu">
                                    <div class="col-12">
                                        <h6 class="text-heading-small">Upto 1300 calories per / day</h6>
                                    </div>
                                    <nav class="nav " id="pills-tab" role="tablist">
                                        <a class="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#thisweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                            This week
                                        </a>
                                        <a class="nav-link " id="nav-upcoming-tab" data-toggle="tab" href="#nextweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                            Next week
                                        </a>
                                        <div class="date-duration">
                                            <h3>02nd August 2021<span> to</span> 08th August 2021</h3>
                                        </div>
                                    </nav>
                                </div>

                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="thisweek" role="tabpanel" aria-labelledby="a">
                                        <div class="space-plan weektable__pack">

                                            <nav class="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                <a class="nav-link active" id="nav-upcoming-tab2" data-toggle="tab" href="#cal-1" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Count - Cal</a>
                                                <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#klean-2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    'KLEAN' Eating Plan</a>
                                                <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#veg-3" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Vegetarian Plan</a>

                                            </nav>
                                        </div>

                                        <div class="tab-content  tab__content__2">
                                            <div class="tab-pane fade show active" id="cal-1" role="tabpanel" aria-labelledby="a">
                                                <div class="weektable table-responsive" id="Calorietable">
                                                    <table class="table_template">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th scope="col">Monday</th>
                                                                <th scope="col">Tuesday</th>
                                                                <th scope="col">Wednesday</th>
                                                                <th scope="col">Thursday</th>
                                                                <th scope="col">Friday</th>
                                                                <th scope="col">Saturday</th>
                                                                <th scope="col">Sunday</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="item-weekfood bg-colortd">
                                                            <tr class="radius-top-list">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={brakefast} />Brakefast
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />AM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={lunch} />Lunch
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />PM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="radius-top-bottom">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={dinner} />Dinner
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>


                                                            <tr class="clorie-detail">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        Daily Calorie
                                                                        Intake
                                                                    </div>
                                                                </th>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>



                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                            <div class="tab-pane fade" id="klean-2" role="tabpanel" aria-labelledby="a">
                                                <div class="weektable table-responsive" id="Calorietable">
                                                    <table class="table_template">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th scope="col">Monday</th>
                                                                <th scope="col">Tuesday</th>
                                                                <th scope="col">Wednesday</th>
                                                                <th scope="col">Thursday</th>
                                                                <th scope="col">Friday</th>
                                                                <th scope="col">Saturday</th>
                                                                <th scope="col">Sunday</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="item-weekfood bg-colortd">
                                                            <tr class="radius-top-list">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={brakefast} />Brakefast
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />AM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={lunch} />Lunch
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />PM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="radius-top-bottom">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={dinner} />Dinner
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>


                                                            <tr class="clorie-detail">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        Daily Calorie
                                                                        Intake
                                                                    </div>
                                                                </th>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>



                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="veg-3" role="tabpanel" aria-labelledby="a">
                                                <div class="weektable table-responsive" id="Calorietable">
                                                    <table class="table_template">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th scope="col">Monday</th>
                                                                <th scope="col">Tuesday</th>
                                                                <th scope="col">Wednesday</th>
                                                                <th scope="col">Thursday</th>
                                                                <th scope="col">Friday</th>
                                                                <th scope="col">Saturday</th>
                                                                <th scope="col">Sunday</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="item-weekfood bg-colortd">
                                                            <tr class="radius-top-list">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={brakefast} />Brakefast
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />AM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={lunch} />Lunch
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />PM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="radius-top-bottom">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={dinner} />Dinner
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>


                                                            <tr class="clorie-detail">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        Daily Calorie
                                                                        Intake
                                                                    </div>
                                                                </th>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>



                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                    <div class="tab-pane" id="nextweek" role="tabpanel" aria-labelledby="a">
                                        <div class="space-plan weektable__pack">

                                            <nav class="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                <a class="nav-link active" id="nav-upcoming-tab2" data-toggle="tab" href="#cal-3" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Count - Cal</a>
                                                <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#klean-3" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    'KLEAN' Eating Plan</a>
                                                <a class="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#veg-4" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Vegetarian Plan</a>

                                            </nav>
                                        </div>

                                        <div class="tab-content  tab__content__2">
                                            <div class="tab-pane fade show active" id="cal-3" role="tabpanel" aria-labelledby="a">
                                                <div class="weektable table-responsive" id="Calorietable">
                                                    <table class="table_template">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th scope="col">Monday</th>
                                                                <th scope="col">Tuesday</th>
                                                                <th scope="col">Wednesday</th>
                                                                <th scope="col">Thursday</th>
                                                                <th scope="col">Friday</th>
                                                                <th scope="col">Saturday</th>
                                                                <th scope="col">Sunday</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="item-weekfood bg-colortd">
                                                            <tr class="radius-top-list">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={brakefast} />Brakefast
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />AM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={lunch} />Lunch
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src="../images/AMsnack.png" />PM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="radius-top-bottom">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={dinner} />Dinner
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>


                                                            <tr class="clorie-detail">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        Daily Calorie
                                                                        Intake
                                                                    </div>
                                                                </th>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>



                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="klean-3" role="tabpanel" aria-labelledby="a">
                                                <div class="weektable table-responsive" id="Calorietable">
                                                    <table class="table_template">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th scope="col">Monday</th>
                                                                <th scope="col">Tuesday</th>
                                                                <th scope="col">Wednesday</th>
                                                                <th scope="col">Thursday</th>
                                                                <th scope="col">Friday</th>
                                                                <th scope="col">Saturday</th>
                                                                <th scope="col">Sunday</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="item-weekfood bg-colortd">
                                                            <tr class="radius-top-list">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={brakefast} />Brakefast
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />AM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src="../images/lunch.png" />Lunch
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />PM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="radius-top-bottom">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={dinner} />Dinner
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>


                                                            <tr class="clorie-detail">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        Daily Calorie
                                                                        Intake
                                                                    </div>
                                                                </th>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>



                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="veg-4" role="tabpanel" aria-labelledby="a">
                                                <div class="weektable table-responsive" id="Calorietable">
                                                    <table class="table_template">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th scope="col">Monday</th>
                                                                <th scope="col">Tuesday</th>
                                                                <th scope="col">Wednesday</th>
                                                                <th scope="col">Thursday</th>
                                                                <th scope="col">Friday</th>
                                                                <th scope="col">Saturday</th>
                                                                <th scope="col">Sunday</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="item-weekfood bg-colortd">
                                                            <tr class="radius-top-list">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={brakefast} />Brakefast
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />AM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={lunch} />Lunch
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={AMsnack} />PM Snack
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="radius-top-bottom">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        <img src={dinner} />Dinner
                                                                    </div>
                                                                </th>
                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col">
                                                                        <img src={weekly_item7} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                            </tr>


                                                            <tr class="clorie-detail">
                                                                <th>
                                                                    <div class="foodtime-icon">
                                                                        Daily Calorie
                                                                        Intake
                                                                    </div>
                                                                </th>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>


                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div class="col-box">
                                                                        <div class="calorie">
                                                                            KCAL
                                                                        </div>
                                                                        <div class="calorie">
                                                                            1168
                                                                        </div>
                                                                        <div class="calorie">
                                                                            PRO
                                                                        </div>
                                                                        <div class="calorie">
                                                                            105
                                                                        </div>

                                                                        <div class="calorie">
                                                                            CARB
                                                                        </div>

                                                                        <div class="calorie">
                                                                            112
                                                                        </div>

                                                                        <div class="calorie">
                                                                            FAT
                                                                        </div>

                                                                        <div class="calorie">
                                                                            38
                                                                        </div>
                                                                    </div>
                                                                </td>



                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                <div class="chooseplan-alert">

                    <div class="container">

                        <div class="skew-bg__grey__top skew-bg__grey__top-red" data-aos="fade-up">
                            <div class="row chooseplan-alert-inner">
                                <span class="image-effect1" data-aos="fade-up-right"><img src="../images/weeklymenu/absolute-choose1.png" /></span>
                                <span class="image-effect2" data-aos="fade-up-right"><img src="../images/weeklymenu/absolute-choose2.png" /></span>
                                <span class="image-effect3" data-aos="fade-up-right"><img src="../images/weeklymenu/absolute-choose3.png" /></span>
                                <div class="col-md-12 col-12 classimage-absolute">

                                    <div class="col-md-6 float-left">
                                        <div class="heading-choosplan-alert">
                                            <h1 data-aos="fade-down-right">Start today Choose Your  Plan</h1>
                                            <p data-aos="fade-down-right">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                            <a data-aos="fade-down-right" href="#">Start Now</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 float-left">
                                        <div class="chooseplan-vector">
                                            <img data-aos="fade-up-right" src="../images/weeklymenu/chooseplan-alert.png" />
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

export default WeeklyMenu
