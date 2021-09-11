import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { howit_banner, } from "../../assets/images"
import KnowMore from './know_more'
import Offerings from './offerings'

const HowItWorks = () => {
    return (
        <>
            <Header />
            <div className="main__content about">
                <div className="banner__holder" data-aos="fade-up">
                    <div className="banner__inner">
                        <h2>How it Works</h2>
                        <img src={howit_banner} className="img-fluid" alt="Meals On Me" />
                    </div>
                </div>
                <KnowMore />
                <Offerings />
            </div>
            <Footer />

        </>
    )
}

export default HowItWorks
