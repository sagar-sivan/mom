import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, Switch, withRouter, useHistory } from "react-router-dom"
import AOS from "aos"
import { useDispatch } from 'react-redux'

import HomeScreen from "./../screens/home/homeScreen"
import Profile from "../screens/profile/profile"
import WeeklyMenu from "../screens/weekly_menu/weeklyMenuScreen"
import ContactScreen from "../screens/contact/contactScreen"
import HowItWorks from "../screens/how_it_works/howItWorksScreen"
import OurPlanScreen from "../screens/our_plan/ourPlanScreen"
import PageNotFound from "../screens/page_not_found/page_notFound"
import AboutUs from "../screens/about_us/aboutUs"
import Loader from "../components/loader"
import PrivateRoute from "./privateRoute"
import UserAction from "../action/user_action"
import CommonAction from "../action/common_action"

import "./../assets/css/bootstrap.min.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
import "./../assets/css/slick.css"
import "./../assets/css/aos.css"
import "./../assets/css/main.css"
import "./../assets/css/abin.css"
import "./../assets/css/laxmi.css"
import "./../assets/css/custom_style.css"
import FaqScreen from "../screens/faq/faq"
import TermsAndCondition from "../screens/terms_and_condition/termsAndCondition"
import PaymentStatus from "../screens/paymentStatus/paymentStatus"
import CommonAlert from "../components/CommonAlert"

const Routes = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  console.log("HISTORY", history);
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 1200,
      once: true,
      duration: 1000
    })
    const customerId = localStorage.getItem("customerId")
    const customerIdTemp = localStorage.getItem("customerIdTemp")
    if (customerId || customerIdTemp) {
      dispatch(UserAction.setUserData({ customerId, customerIdTemp }))
    }
    dispatch(CommonAction.getSettings())
  }, [])
  return (
    <Router basename={"/"}>
      <Loader />
      <CommonAlert />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/weekly-menu" component={WeeklyMenu} />
        <Route exact path="/contact" component={ContactScreen} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route exact path="/our-plan" component={OurPlanScreen} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/faq" component={FaqScreen} />
        <Route exact path="/terms-and-condition" component={TermsAndCondition} />
        <Route path="/payment-status" component={PaymentStatus} />
        <Route component={PageNotFound} />

      </Switch>
    </Router>
  )
}

export default Routes

