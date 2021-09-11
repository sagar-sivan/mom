import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { weekly, weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7, dinner, brakefast, AMsnack, lunch } from "../../assets/images"
import TopMenu from './top_menu'
import CaloriePlan from './calorie_plan'
import StartTodayPlan from './start_today_plan'
import LoaderAction from '../../action/loader_action'
import WeeklyAction from "../../action/weekly_action"

const WeeklyMenu = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(LoaderAction.showLoader())
        dispatch(WeeklyAction.getWeeklyData())
    }, [])
    return (
        <>
            <Header />
            <div className="main__content about">

                <div className="banner__holder" data-aos="fade-up">
                    <div className="banner__inner">
                        <h2>Weekly menu</h2>
                        <img src={weekly} className="img-fluid" alt="Meals On Me" />
                    </div>
                </div>
                <TopMenu />
                <CaloriePlan />
                <StartTodayPlan />
            </div>
            <Footer />
        </>
    )
}

export default WeeklyMenu
