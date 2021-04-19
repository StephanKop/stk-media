import React from 'react';
import Hero from "../hero";
import Explanation from "../explanation";
import Footer from "../footer";
import ShowCase from "../product_showcase";

const Frontend = () => {
    return (
        <>
            <Hero
                typewriterTitle={'Frontend development'}
                subtitle={'Het gezicht van je website moet wel goed in elkaar zitten!'}
                heroImg={'hero3.png'}
                backgroundImage={'https://i.imgur.com/OfmcaDB.jpg'}/>
            <Explanation
                title={'Frontend development'}
                p1={'De frontend is de basis van een succesvolle website of app. Dit is namelijk het gedeelte van je website waar gebruikers echt interactie mee hebben. Het "gezicht" van je website.'}
                p2={'Een frontend developer zet het design van een website om in een werkend product. Denk bijvoorbeeld aan de layout, navigatie en styling van de pagina.'}
                p3={'Hij is dus iemand die niet alleen maar code aan het tikken is maar ook met je meedenkt over het ontwerp.'}/>
            <ShowCase
                title={'Gillz developer dashboard'}
                backgroundImage={'/media/gillz.png'}
                description={'Een dashboard dat situational awareness verhoogt bij developers. Het Dashboard is geschreven in React Typescript en maakt gebruik van de Zendesk en Azure DevOps Api`s.'}/>
            <Footer/>
        </>
    )
};

export default Frontend;