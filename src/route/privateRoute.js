import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = (props) => {
	const [state, setState] = useState({ loaded: false, permission: false, redirect: false, })

	useEffect(() => {
		setState({ permission: !!localStorage.getItem("customerId"), redirect: "/", loaded: true })
	}, [])
	// constructor(props, { component: Component, ...rest }) {
	// 	super(props)
	// 	this.state = {
	// 		loaded: false,
	// 		permission: false,
	// 		redirect: false,
	// 	}
	// 	this.accessPermission.bind(this);
	// }
	// async componentDidMount() {
	// 	var res = await this.accessPermission();
	// 	this.setState(res);

	// }
	// render() {
	const { ...rest } = props;
	const { permission, redirect, loaded } = state;
	if (loaded) {
		if (!permission && !redirect) {
			return null;
		}
		else if (!permission && redirect) {
			return (<Redirect to={redirect} />)
		}
		else if (permission) {
			return (
				<Route {...rest} />
			)
		} else { }
	} else {
		return null;
	}

	// }
}

export default PrivateRoute;