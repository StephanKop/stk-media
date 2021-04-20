import React from 'react';
import Hero from "../hero";
import AboutExplanation from "../aboutExplanation";
import Footer from "../footer";
import TitleDivider from "../titleDivider";
import ContactForm from "../contactForm";

const About = () => {
    return (
        <div>
            <Hero
              typewriterTitle={'Het gezicht van STK Media'}
              subtitle={'Het is wel zo leuk om even kennis te maken!'}
              heroImg={'hero3.png'}
              backgroundImage={'https://i.imgur.com/OfmcaDB.jpg'}/>
            <AboutExplanation
                p1={'Hi! Leuk om kennis te maken! Mijn naam is Stephan Kop. Geboren en getogen in Alphen aan den Rijn. Ik ben in 2021 afgestudeerd aan de Hogeschool van Amsterdam, opleiding Communicatie en Multimedia Design.'}
                p2={'Al heel mijn leven ben ik geïnteresseerd in media en techniek, daarom heb ik een vakgebied gezocht waar ik deze interesses kon combineren. Ik noem mijzelf nu ook Frontend developer met een grote voorliefde voor design.'}
                p3={'In mijn vrije tijd ben ik een groot liefhebber van film en fotografie en ben ik regelmatig op de tennisbaan te vinden. Mocht je me dus even niet kunnen bereiken, dan ben ik waarschijnlijk iemand aan het inmaken op de tennisbaan!'}
            />
            {/*<ContactForm/>*/}
            <Footer/>
        </div>
    )
}

export default About;