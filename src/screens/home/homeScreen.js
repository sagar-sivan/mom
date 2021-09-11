import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import HomeBanner from './home_banner'
import HomeStory from './home_story'
import HomePlan from './home_plan'
import HomeCuisine from './home_cuisine'
import HomeHowWorks from './home_how'
import HomeCaloriesPlan from './home_calories_plan'
import HomeTestimonial from './home_testimonial'
import StartPlan from '../../screens/start_plan/start_plan'
import SelectMenu from './../select_menu/select_menu'
import AddAddress from '../add_address/addAddress'


const HomeScreen = () => {
    return (
        <>
            <Header />
            <div className="main__content home">
                <HomeBanner />
                <HomeStory />
                <HomePlan />
                <HomeCuisine />
                <HomeHowWorks />
                <HomeCaloriesPlan />
                <HomeTestimonial />
            </div>
            <StartPlan />
            <SelectMenu />
            <Footer />
            <AddAddress />
        </>
    )
}

export default HomeScreen
