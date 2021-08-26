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
            <div class="main__content about">

                <div class="banner__holder" data-aos="fade-up">
                    <div class="banner__inner">
                        <h2>Contact Us</h2>
                        <img src={contact_banner} class="img-fluid" alt="Meals On Me" />
                    </div>
                </div>
                <div class="container" data-aos="fade-up">
                    <ContactForm />
                    <Map />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactScreen
