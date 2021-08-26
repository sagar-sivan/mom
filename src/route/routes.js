import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom"

import HomeScreen from "./../screens/home/homeScreen"
import Profile from "../screens/profile/profile"
import WeeklyMenu from "../screens/weekly_menu/weekly_menu"
import AOS from "aos"

import "./../assets/css/bootstrap.min.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
import "./../assets/css/slick.css"
import "./../assets/css/aos.css"
import "./../assets/css/main.css"
import "./../assets/css/abin.css"

const Routes = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 1200,
      once: true,
      duration: 1000
    })
  }, [])
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/weekly-menu" component={WeeklyMenu} />

      </Switch>
    </Router>
  )
}

export default Routes

