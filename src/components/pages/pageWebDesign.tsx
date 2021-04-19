import React from 'react';
import Hero from "../hero";
import ShowCase from "../product_showcase";
import Footer from "../footer";
import Explanation from "../explanation";

const Design = () => {
    return (
        <>
            <Hero
                typewriterTitle={'Web design'}
                subtitle={'Voor websites, apps een nieuwe huisstijl of andere media.'}
                heroImg={'hero3.png'}
                backgroundImage={'https://i.imgur.com/Noqz5af.jpg'}/>
            <Explanation
                title={'Digitale media'}
                p1={'Web design staat tegenwoordig centraal op het internet.'}
                p2={'Of je het nou hebt over het ontwerp van je website of app, het design en de uitstraling is een van de belangrijkste onderdelen.'}
                p3={'Of je het nou hebt over het ontwerp van je website of app, het design en de uitstraling is een van de belangrijkste onderdelen.'}/>
            <ShowCase
                title={'Wuppermann maandelijkse nieuwsbrief'}
                backgroundImage={'/media/wuppermann_cover.png'}
                description={'Een compleet nieuwe interne nieuwsbrief'}/>
            <ShowCase
                title={'Volcanos gray website'}
                backgroundImage={'/media/volcanos.png'}
                description={'Een website ontworpen gebaseerd op de kleur grijs'}/>
            <ShowCase
                title={'Brochure dierentuin'}
                backgroundImage={'/media/page1.png'}
                description={'Een fictieve opdracht voor een dierentuin'}/>
            <Footer/>
        </>
    )
}

export default Design;