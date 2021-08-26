import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { weekly, weekly_item1, weekly_item2, weekly_item3, weekly_item4, weekly_item5, weekly_item6, weekly_item7, dinner, brakefast, AMsnack, lunch } from "./../../assets/images"
import TopMenu from './top_menu'
import CaloriePlan from './calorie_plan'
import StartTodayPlan from './start_today_plan'

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
                <TopMenu />
                <CaloriePlan />
                <StartTodayPlan />
            </div>
            <Footer />
        </>
    )
}

export default WeeklyMenu
