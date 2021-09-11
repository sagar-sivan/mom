import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from "lodash"

import { weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7 } from "./../../assets/images"

const dishImage = "http://mealsuae-001-site1.itempurl.com/Images/Plan/"

const TopMenu = () => {
    const { weeklyData } = useSelector(state => state.weeklyReducer);
    const lunchDinnerData = weeklyData.find(item => item.planName == "Lunch & Dinner Plan")
    if (!isEmpty(lunchDinnerData) && lunchDinnerData.weeklyMenuWeekOutputList && lunchDinnerData.weeklyMenuWeekOutputList.length > 0) {
        const lunchData = lunchDinnerData.weeklyMenuWeekOutputList;
        return (
            <div className="lunch-plan-section ">
                <div className="container" data-aos="fade-up">
                    <div className="col-md-12 col-12">
                        <h2 className="text-center mb-5 pb-5">
                            <span>Weeks Top Menu Dishes </span>
                            {lunchDinnerData.planName}
                        </h2>

                    </div>
                    <div className="col-md-12 col-12 no-gutters-sm">
                        <div className="skew-bg__grey__top" data-aos="fade-up">

                            <div className="weektable-space ">
                                <div className="weektable-menu">
                                    <nav className="nav " id="pills-tab" role="tablist">
                                        {
                                            lunchData.map((item, index) => {
                                                return (
                                                    <a class={`nav-link ${index == 0 ? "active" : ""}`} id={`nav-upcoming-tab21212`} data-toggle="tab" href={`#week_${index}`} role="tab" aria-controls="tab-1" aria-selected="true">{item.weekName} </a>
                                                )
                                            })
                                        }

                                        {/* <a className="nav-link " id="nav-upcoming-tab" data-toggle="tab" href="#nextweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                            Next week
                                        </a> */}
                                        <div className="date-duration">
                                            <h3>02nd August 2021<span> to</span> 08th August 2021</h3>
                                        </div>
                                    </nav>
                                </div>

                                <div className="tab-content">
                                    {
                                        lunchData.map((item, index) => {
                                            return (<div class={`tab-pane fade ${index == 0 ? "show active" : ""} `} id={`week_${index}`} role="tabpanel" aria-labelledby="a">
                                                <div className="space-plan weektable__pack">

                                                    <nav className="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                        {
                                                            item.weeklyMenuCuisineOutputList.map((subItem, subIndex) => {
                                                                return (<a class={`nav-link ${subIndex == 0 ? "active" : ""}`} id={`nav-upcoming-tab-${subIndex}`} data-toggle="tab" href={`#plan-in-${subIndex}`} role="tab" aria-controls={`tab-${subIndex}`} aria-selected="true">
                                                                    {subItem.cuisineName}</a>)
                                                            })
                                                        }
                                                    </nav>

                                                </div>

                                                <div className="tab-content  tab__content__2">
                                                    {
                                                        item.weeklyMenuCuisineOutputList.map((subItem, subIndex) => {
                                                            return (
                                                                <div class={`tab-pane fade ${subIndex == 0 ? "show active" : ""}`} id="plan-In" role="tabpanel" aria-labelledby="a">
                                                                    <div className="weektable table-responsive" id="timetable">
                                                                        <table className="table_template">
                                                                            <thead>
                                                                                <tr>
                                                                                    {
                                                                                        subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => <th scope="col">{thirdItem.dayName}</th>)
                                                                                    }
                                                                                    {/* <th scope="col">Monday</th>
                                                                                        <th scope="col">Tuesday</th>
                                                                                        <th scope="col">Wednesday</th>
                                                                                        <th scope="col">Thursday</th>
                                                                                        <th scope="col">Friday</th>
                                                                                        <th scope="col">Saturday</th>
                                                                                        <th scope="col">Sunday</th> */}
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody className="item-weekfood">


                                                                                <tr>
                                                                                    {
                                                                                        subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                            return (
                                                                                                <td>
                                                                                                    {
                                                                                                        thirdItem.weeklyMenuDishOutputList.map((fourthItem, fourthIndex) => {
                                                                                                            return (
                                                                                                                <div className="col">
                                                                                                                    <img src={`${dishImage}${fourthItem.dishImageLocation}`} />
                                                                                                                    <p>{fourthItem.dishName} </p>
                                                                                                                </div>
                                                                                                            )
                                                                                                        })
                                                                                                    }

                                                                                                </td>
                                                                                            )
                                                                                        })
                                                                                    }



                                                                                    {/* <td>
                                                                                            <div className="col">
                                                                                                <img src={weekly_item2} />
                                                                                                <p>Yellow Spice Dory
                                                                                                    with Baked Pototo
                                                                                                </p>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td>
                                                                                            <div className="col">
                                                                                                <img src={weekly_item3} />
                                                                                                <p>Yellow Spice Dory
                                                                                                    with Baked Pototo
                                                                                                </p>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td>
                                                                                            <div className="col">
                                                                                                <img src={weekly_item4} />
                                                                                                <p>Yellow Spice Dory
                                                                                                    with Baked Pototo
                                                                                                </p>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td>
                                                                                            <div className="col">
                                                                                                <img src={weekly_item5} />
                                                                                                <p>Yellow Spice Dory
                                                                                                    with Baked Pototo
                                                                                                </p>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td>
                                                                                            <div className="col">
                                                                                                <img src={weekly_item6} />
                                                                                                <p>Yellow Spice Dory
                                                                                                    with Baked Pototo
                                                                                                </p>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td>
                                                                                            <div className="col">
                                                                                                <img src={weekly_item7} />
                                                                                                <p>Yellow Spice Dory
                                                                                                    with Baked Pototo
                                                                                                </p>
                                                                                            </div>
                                                                                        </td> */}

                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }


                                                    {/* <div className="tab-pane fade" id="plan-Ar" role="tabpanel" aria-labelledby="a">
                                                        <div className="weektable table-responsive" id="timetable">
                                                            <table className="table_template">
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
                                                                <tbody className="item-weekfood">


                                                                    <tr>
                                                                        <td>
                                                                            <div className="col">
                                                                                <img src={weekly_item1} />
                                                                                <p>Yellow Spice Dory
                                                                                    with Baked Pototo
                                                                                </p>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="col">
                                                                                <img src={weekly_item2} />
                                                                                <p>Yellow Spice Dory
                                                                                    with Baked Pototo
                                                                                </p>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="col">
                                                                                <img src={weekly_item3} />
                                                                                <p>Yellow Spice Dory
                                                                                    with Baked Pototo
                                                                                </p>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="col">
                                                                                <img src={weekly_item4} />
                                                                                <p>Yellow Spice Dory
                                                                                    with Baked Pototo
                                                                                </p>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="col">
                                                                                <img src={weekly_item5} />
                                                                                <p>Yellow Spice Dory
                                                                                    with Baked Pototo
                                                                                </p>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="col">
                                                                                <img src={weekly_item6} />
                                                                                <p>Yellow Spice Dory
                                                                                    with Baked Pototo
                                                                                </p>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="col">
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
                                                    </div> */}

                                                </div>


                                            </div>)
                                        })
                                    }

                                    {/* <div className="tab-pane fade" id="nextweek" role="tabpanel" aria-labelledby="a">
                                        <div className="space-plan weektable__pack">
                                            <nav className="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                <a className="nav-link active" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Indian <br />Meal Plan</a>
                                                <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Arabic<br /> Meal Plan</a>
                                                <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    International<br /> Meal Plan</a>
                                                <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Wholesome<br />
                                                    Meal Plan</a>
                                                <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-In2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    Vegetarian / Vegan<br />
                                                    Meal Plan</a>
                                                <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#plan-Ar2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                    KETO<br />
                                                    Meal Plan</a>
                                            </nav>

                                        </div>

                                        <div className="tab-content  tab__content__2">
                                            <div className="tab-pane fade show active" id="plan-In2" role="tabpanel" aria-labelledby="a">
                                                <div className="weektable table-responsive" id="timetable">
                                                    <table className="table_template">
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
                                                        <tbody className="item-weekfood">


                                                            <tr>
                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
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

                                            <div className="tab-pane fade" id="plan-Ar2" role="tabpanel" aria-labelledby="a">
                                                <div className="weektable table-responsive" id="timetable">
                                                    <table className="table_template">
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
                                                        <tbody className="item-weekfood">


                                                            <tr>
                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item1} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item2} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item3} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item4} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item5} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
                                                                        <img src={weekly_item6} />
                                                                        <p>Yellow Spice Dory
                                                                            with Baked Pototo
                                                                        </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="col">
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


                                    </div> */}



                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default TopMenu
