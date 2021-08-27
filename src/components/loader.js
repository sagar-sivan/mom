import React from 'react'
import { useSelector } from 'react-redux'

import { logo_color } from "./../assets/images"

const Loader = () => {
    const { loading } = useSelector(state => state.loaderReducer);
    return (
        loading ? <div className="loader-container">
            <div className="loader-inner" id="loaderContainer"><img className="loaderImage" height="50px" src={logo_color} alt="" />
            </div>
        </div> : null
    )
}

export default Loader
