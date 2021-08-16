import React from "react"
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom"

import HomeScreen from "./../screens/home/homeScreen"
import Profile from "../screens/profile/profile"

import "./../assets/css/bootstrap.min.css"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
import "./../assets/css/slick.css"
import "./../assets/css/aos.css"
import "./../assets/css/main.css"

const Routes = () => {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/profile" component={Profile} />

      </Switch>
    </Router>
  )
}

export default Routes

