import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from "lodash"

import { weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7, dinner, brakefast, AMsnack, lunch } from "./../../assets/images"

const CaloriePlan = () => {

    const { weeklyData } = useSelector(state => state.weeklyReducer);
    const { settings } = useSelector(state => state.commonReducer);
    const calorieCountData = weeklyData.find(item => item.planName == "Calorie Counted Plans")
    const dishImageLocation = settings.find(item => item.pName == "Dish Image Location")?.pValue
    if (!isEmpty(calorieCountData) && calorieCountData.weeklyMenuWeekOutputList && calorieCountData.weeklyMenuWeekOutputList.length > 0) {
        const calorieData = calorieCountData.weeklyMenuWeekOutputList;
        return (
            <div className="container" data-aos="fade-up">
                <div className="col-md-12 col-12">
                    <h2 className="text-center mb-5 pb-5">
                        <span>Weeks Top Menu Dishes </span>
                        {calorieCountData.planName}
                    </h2>

                    <div className="skew-bg__grey__bottom" data-aos="fade-up">

                        <div className="weektable-space ">
                            <div className="weektable-menu">
                                <div className="col-12">
                                    <h6 className="text-heading-small">Upto 1300 calories per / day</h6>
                                </div>
                                <nav className="nav " id="pills-tab" role="tablist">
                                    {
                                        calorieData.map((item, index) => {
                                            return (<a class={`nav-link ${index == 0 ? "active" : ""}`} id="nav-upcoming-tab" data-toggle="tab" href={`#thisweek-${index}`} role="tab" aria-controls="tab-1" aria-selected="true">
                                                {item.weekName}
                                            </a>)
                                        })
                                    }
                                    {/* <a className="nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#thisweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                        This week
                                    </a>
                                    <a className="nav-link " id="nav-upcoming-tab" data-toggle="tab" href="#nextweek" role="tab" aria-controls="tab-1" aria-selected="true">
                                        Next week
                                    </a> */}
                                    <div className="date-duration">
                                        <h3>02nd August 2021<span> to</span> 08th August 2021</h3>
                                    </div>
                                </nav>
                            </div>

                            <div className="tab-content">
                                {
                                    calorieData.map((item, index) => {
                                        return (
                                            <div class={`tab-pane fade ${index == 0 ? "show active" : ""}`} id={`thisweek-${index}`} role="tabpanel" aria-labelledby="a">
                                                <div className="space-plan weektable__pack">

                                                    <nav className="nav tab__menu__2" id="pills-tab2" role="tablist">
                                                        {
                                                            item.weeklyMenuCuisineOutputList.map((subItem, subIndex) => {
                                                                return (
                                                                    <a class={`nav-link ${subIndex == 0 ? "active" : ""}`} id="nav-upcoming-tab2" data-toggle="tab" href={`#cal-${subIndex}`} role="tab" aria-controls="tab-2" aria-selected="true">{subItem.cuisineName}</a>
                                                                )
                                                            })
                                                        }
                                                        {/* <a className="nav-link active" id="nav-upcoming-tab2" data-toggle="tab" href="#cal-1" role="tab" aria-controls="tab-2" aria-selected="true">
                                                            Count - Cal</a>
                                                        <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#klean-2" role="tab" aria-controls="tab-2" aria-selected="true">
                                                            'KLEAN' Eating Plan</a>
                                                        <a className="nav-link" id="nav-upcoming-tab2" data-toggle="tab" href="#veg-3" role="tab" aria-controls="tab-2" aria-selected="true">
                                                            Vegetarian Plan</a> */}

                                                    </nav>
                                                </div>

                                                <div className="tab-content  tab__content__2">
                                                    {
                                                        item.weeklyMenuCuisineOutputList.map((subItem, subIndex) => {
                                                            return (<div class={`tab-pane fade ${subIndex == 0 ? "show active" : ""} `} id={`cal-${subIndex}`} role="tabpanel" aria-labelledby="a">
                                                                <div className="weektable table-responsive" id="Calorietable">
                                                                    <table className="table_template">
                                                                        <thead>
                                                                            <tr>
                                                                                <th></th>
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
                                                                        <tbody className="item-weekfood bg-colortd">

                                                                            <tr className="radius-top-list">
                                                                                <th>
                                                                                    <div className="foodtime-icon">
                                                                                        <img src={brakefast} />Brakefast
                                                                                    </div>
                                                                                </th>

                                                                                {
                                                                                    subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                        return (
                                                                                            <td>
                                                                                                {
                                                                                                    thirdItem.weeklyMenuDishOutputList.filter(filterItem => filterItem.timeTypeName == "Brakefast").map((fourthItem, fourthIndex) => {
                                                                                                        return (
                                                                                                            <div className="col">
                                                                                                                <img src={`${dishImageLocation}${fourthItem.dishImageLocation}`} />
                                                                                                                <p>{fourthItem.dishName} </p>
                                                                                                            </div>)
                                                                                                    })
                                                                                                }
                                                                                            </td>

                                                                                        )
                                                                                    })
                                                                                }

                                                                            </tr>

                                                                            <tr>
                                                                                <th>
                                                                                    <div className="foodtime-icon">
                                                                                        <img src={AMsnack} />AM Snack
                                                                                    </div>
                                                                                </th>
                                                                                {
                                                                                    subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                        return (
                                                                                            <td>
                                                                                                {
                                                                                                    thirdItem.weeklyMenuDishOutputList.filter(filterItem => filterItem.timeTypeName == "AM Snack").map((fourthItem, fourthIndex) => {
                                                                                                        return (
                                                                                                            <div className="col">
                                                                                                                <img src={`${dishImageLocation}${fourthItem.dishImageLocation}`} />
                                                                                                                <p>{fourthItem.dishName} </p>
                                                                                                            </div>)
                                                                                                    })
                                                                                                }
                                                                                            </td>

                                                                                        )
                                                                                    })
                                                                                }

                                                                            </tr>

                                                                            <tr>
                                                                                <th>
                                                                                    <div className="foodtime-icon">
                                                                                        <img src={lunch} />Lunch
                                                                                    </div>
                                                                                </th>
                                                                                {
                                                                                    subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                        return (
                                                                                            <td>
                                                                                                {
                                                                                                    thirdItem.weeklyMenuDishOutputList.filter(filterItem => filterItem.timeTypeName == "Lunch").map((fourthItem, fourthIndex) => {
                                                                                                        return (
                                                                                                            <div className="col">
                                                                                                                <img src={`${dishImageLocation}${fourthItem.dishImageLocation}`} />
                                                                                                                <p>{fourthItem.dishName} </p>
                                                                                                            </div>)
                                                                                                    })
                                                                                                }
                                                                                            </td>

                                                                                        )
                                                                                    })
                                                                                }

                                                                            </tr>

                                                                            <tr>
                                                                                <th>
                                                                                    <div className="foodtime-icon">
                                                                                        <img src={AMsnack} />PM Snack
                                                                                    </div>
                                                                                </th>
                                                                                {
                                                                                    subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                        return (
                                                                                            <td>
                                                                                                {
                                                                                                    thirdItem.weeklyMenuDishOutputList.filter(filterItem => filterItem.timeTypeName == "PM Snack").map((fourthItem, fourthIndex) => {
                                                                                                        return (
                                                                                                            <div className="col">
                                                                                                                <img src={`${dishImageLocation}${fourthItem.dishImageLocation}`} />
                                                                                                                <p>{fourthItem.dishName} </p>
                                                                                                            </div>)
                                                                                                    })
                                                                                                }
                                                                                            </td>

                                                                                        )
                                                                                    })
                                                                                }

                                                                            </tr>
                                                                            <tr className="radius-top-bottom">
                                                                                <th>
                                                                                    <div className="foodtime-icon">
                                                                                        <img src={dinner} />Dinner
                                                                                    </div>
                                                                                </th>
                                                                                {
                                                                                    subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                        return (
                                                                                            <td>
                                                                                                {
                                                                                                    thirdItem.weeklyMenuDishOutputList.filter(filterItem => filterItem.timeTypeName == "Dinner").map((fourthItem, fourthIndex) => {
                                                                                                        return (
                                                                                                            <div className="col">
                                                                                                                <img src={`${dishImageLocation}${fourthItem.dishImageLocation}`} />
                                                                                                                <p>{fourthItem.dishName} </p>
                                                                                                            </div>)
                                                                                                    })
                                                                                                }
                                                                                            </td>

                                                                                        )
                                                                                    })
                                                                                }

                                                                            </tr>


                                                                            <tr className="clorie-detail">
                                                                                <th>
                                                                                    <div className="foodtime-icon">
                                                                                        Daily Calorie
                                                                                        Intake
                                                                                    </div>
                                                                                </th>
                                                                                {
                                                                                    subItem.weeklyMenuDaysOutputList.map((thirdItem, thirdIndex) => {
                                                                                        return (
                                                                                            <td>
                                                                                                <div className="col-box">
                                                                                                    <div className="calorie">
                                                                                                        KCAL
                                                                                                    </div>
                                                                                                    <div className="calorie">
                                                                                                        {thirdItem?.dailyCalory?.kcal}
                                                                                                    </div>
                                                                                                    <div className="calorie">
                                                                                                        PRO
                                                                                                    </div>
                                                                                                    <div className="calorie">
                                                                                                        {thirdItem?.dailyCalory?.pro}
                                                                                                    </div>

                                                                                                    <div className="calorie">
                                                                                                        CARB
                                                                                                    </div>

                                                                                                    <div className="calorie">
                                                                                                        {thirdItem?.dailyCalory?.carb}
                                                                                                    </div>

                                                                                                    <div className="calorie">
                                                                                                        FAT
                                                                                                    </div>

                                                                                                    <div className="calorie">
                                                                                                        {thirdItem?.dailyCalory?.fat}
                                                                                                    </div>
                                                                                                </div>


                                                                                            </td>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </tr>

                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>)
                                                        })
                                                    }


                                                </div>


                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default CaloriePlan
