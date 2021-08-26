import React from 'react'

import { weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7, dinner, brakefast, AMsnack, lunch } from "./../../assets/images"

const CaloriePlan = () => {
    return (
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
    )
}

export default CaloriePlan
