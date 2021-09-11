import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Footer from '../../components/footer'
import Header from '../../components/header'
import ProfileBanner from './profile_banner'
import MonthlyPlan from './profile_monthly_plan'
import ProfilePackages from './profile_packages'
import ProfileTodayDishes from './profile_today_dishes'
import ProfileHealthStatus from './profile_health_status'
import ProfileAction from '../../action/profile_action'
import LoaderAction from '../../action/loader_action'
import AddAddress from '../add_address/addAddress'
import EditProfile from '../edit_profile/editProfile'

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const customerId = localStorage.getItem("customerId")
        if (customerId) {
            dispatch(LoaderAction.showLoader())
            dispatch(ProfileAction.getAllProfileData(customerId))
            dispatch(ProfileAction.getCustomerAddress(customerId))
        }
    }, [])

    return (
        <>
            <Header />
            <div className="main__content about">

                <ProfileBanner />
                <MonthlyPlan />
                <ProfilePackages />
                {/* <ProfileTodayDishes /> */}
                {/* <ProfileHealthStatus /> */}
            </div>
            <AddAddress />
            <EditProfile />
            <Footer />
        </>
    )
}

export default Profile
