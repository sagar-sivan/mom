import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import { howit_banner, } from "./../../assets/images"
import KnowMore from './know_more'
import Offerings from './offerings'

const HowItWorks = () => {
    return (
        <>
            <Header />
            <div class="main__content about">
                <div class="banner__holder" data-aos="fade-up">
                    <div class="banner__inner">
                        <h2>How it Works</h2>
                        <img src={howit_banner} class="img-fluid" alt="Meals On Me" />
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
