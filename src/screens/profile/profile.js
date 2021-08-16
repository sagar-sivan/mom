import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import ProfileBanner from './profile_banner'
import MonthlyPlan from './profile_monthly_plan'
import ProfilePackages from './profile_packages'
import ProfileTodayDishes from './profile_today_dishes'
import ProfileHealthStatus from './profile_health_status'

const Profile = () => {
    return (
        <>
            <Header />
            <div class="main__content about">

                <ProfileBanner />
                <MonthlyPlan />
                <ProfilePackages />
                <ProfileTodayDishes />
                <ProfileHealthStatus />
            </div>
            <Footer />
        </>
    )
}

export default Profile
