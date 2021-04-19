import React from 'react';
import Hero from "../hero";
import ContactForm from "../contactForm";

const Contact = () => {
    return (
        <>
            <Hero
                typewriterTitle={'kopje koffie drinken?'}
                subtitle={'Laat dan hier je gegevens achter!'}
                heroImg={'hero3.png'}
                backgroundImage={'https://i.imgur.com/TNDtDUR.jpeg'}/>
            <ContactForm/>
        </>
    )
}

export default Contact;