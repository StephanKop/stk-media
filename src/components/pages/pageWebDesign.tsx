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
                description={'WSN wilde graag een nieuw ontwerp van hun interne nieuwsbrief. De nieuwsbrief wordt organisatie breed gelezen dus een goed gebalanceerde style tussen speels en professioneel was belangrijk.'}/>
            <ShowCase
                title={'Volcanos gray website'}
                backgroundImage={'/media/volcanos.png'}
                description={'Een website ontworpen gebaseerd op basis van de kleur grijs, de uitdaging zat voornamelijk om de website niet "saai" te laten ogen. Hiervoor heb ik gebruik gemaakt van krachtige beelden.'}/>
            <ShowCase
                title={'Brochure dierentuin'}
                backgroundImage={'/media/page1.png'}
                description={'Een fictieve opdracht voor een dierentuin die een nieuw ontworpen borchure wilden die bij de ingang uitgedeeld konden worden met geschiedenis over het park en leuke dieren weetjes.'}/>
            <Footer/>
        </>
    )
}

export default Design;