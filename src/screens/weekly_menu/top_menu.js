import React from 'react'

import { weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7 } from "./../../assets/images"

const TopMenu = () => {
    return (
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
    )
}

export default TopMenu
