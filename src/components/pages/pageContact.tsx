import React from 'react';
import Hero from "../hero";
import ContactForm from "../contactForm";
import Footer from "../footer";
import TitleDivider from "../titleDivider";

const Contact = () => {
    return (
        <>
            <Hero
                typewriterTitle={'kopje koffie drinken?'}
                subtitle={'Laat dan hier je gegevens achter!'}
                heroImg={'hero3.png'}
                backgroundImage={'https://i.imgur.com/2Vh8pDY.jpg'}/>
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;