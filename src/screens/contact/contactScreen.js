import React from 'react'

import Footer from '../../components/footer'
import Header from '../../components/header'
import Map from './map'
import ContactForm from './contact_form'
import { contact_banner } from "./../../assets/images"

const ContactScreen = () => {
    return (
        <>
            <Header />
            <div className="main__content about">

                <div className="banner__holder" data-aos="fade-up">
                    <div className="banner__inner">
                        <h2>Contact Us</h2>
                        <img src={contact_banner} className="img-fluid" alt="Meals On Me" />
                    </div>
                </div>
                <div className="container" data-aos="fade-up">
                    <ContactForm />
                    <Map />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactScreen
