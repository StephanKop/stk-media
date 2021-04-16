import React from "react";
import Hero from "../hero";
import Card from "../card";
import Footer from "../footer";

const Home = () => {

    return (
        <>
            <Hero
                typewriterTitle={'Design, Development en UX?'}
                subtitle={'Het is allemaal mogelijk!'}
                backgroundImage={'https://i.imgur.com/bZp6pgw.jpeg'}
                heroImg={'hero3.png'}/>
            <Card/>
            <Footer/>
        </>
    )
}

export default Home;