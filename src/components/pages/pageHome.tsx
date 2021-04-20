import React from "react";
import Hero from "../hero";
import Card from "../card";
import Footer from "../footer";
import TitleDivider from "../titleDivider";
import ShowCase from "../product_showcase";

const Home = () => {

    return (
        <>
            <Hero
                typewriterTitle={'Design, Development en UX?'}
                subtitle={'Het is allemaal mogelijk!'}
                backgroundImage={'https://i.imgur.com/VylRi7j.jpg'}
                heroImg={'hero3.png'}/>
            <Card/>
            <TitleDivider title={'Recente projecten'}/>
            <ShowCase
                title={'Wuppermann maandelijkse nieuwsbrief'}
                backgroundImage={'/media/wuppermann_cover.png'}
                description={'WSN wilde graag een nieuw ontwerp van hun interne nieuwsbrief. De nieuwsbrief wordt organisatie breed gelezen dus een goed gebalanceerde style tussen speels en professioneel was belangrijk.'}/>
            <ShowCase
                title={'Gillz developer dashboard'}
                backgroundImage={'/media/gillz.png'}
                description={'Een dashboard dat situational awareness verhoogt bij developers. Het Dashboard is geschreven in React Typescript en maakt gebruik van de Zendesk en Azure DevOps Api`s.'}/>
            <Footer/>
        </>
    )
}

export default Home;