import React from 'react'

import Header from "./../../components/header"
import Footer from "./../../components/footer"
import { men_404, motor, spark_1, error_404 } from "./../../assets/images"

const PageNotFound = () => {
    return (
        <>
            <Header />
            <section className="error-wrap" style={{ backgroundImage: `url("${error_404}")` }}>
                <div className="container">
                    <div className="col-12">

                        <div className="for-zero-box">
                            <h1>404</h1>
                            <img className="animate-item1" src={men_404} />
                            <img className="animate-item2" src={motor} />
                            <img className="animate-item3" src={spark_1} />
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PageNotFound
