import React from 'react';
import Hero from "../hero";
import Explanation from "../explanation";
import Footer from "../footer";

const UX = () => {
    return (
        <>
            <Hero
                typewriterTitle={'User experience design'}
                subtitle={'De gebruiker de best mogelijke ervaring geven!'}
                heroImg={'hero3.png'}
                backgroundImage={'https://i.imgur.com/El9bQ3r.jpg'}/>
            <Explanation
                title={'User experience design'}
                p1={'Ontzettend leuk, zo`n gloednieuwe strak ontworpen website, maar wanneer de gebruikers er een slechte ervaring mee hebben heb jij er ook niks aan.'}
                p2={'User experience design is een ontwerp techniek die focust op de gebruikservaring. Denk maar terug naar een website waar je op een knopje probeerde te klikken dat net even te klein is.'}
                p3={'Een UX designer doet onderzoek naar deze "fouten" met usability tests en user tests en verwerkt de uitkomsten in een verbeterd ontwerp.'}/>
            <Footer/>
        </>
    )
};

export default UX;