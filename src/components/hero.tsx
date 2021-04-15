import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
    let i = 0;
    const txt = 'Design, Development en UX?';
    const speed = 50;
    const typeWriter = () => {
        if (i < txt.length) {
            const heading = document.getElementById('typewriter1');
            if (heading !== null) {
                heading.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }

    useEffect(() => {
        typeWriter();
    })
    return (
        <div className={'heroContainer'}>
        <div className={'heroContainer__hero'}>
            <div className={'heroContainer__hero__left'}>
                <h2><span id={'typewriter1'}></span><span className={'caret'}>&nbsp;</span></h2>
                {/*<h1 id={'typewriter1'}>Design, Development en UX?</h1>*/}
                <h2>Het is allemaal mogelijk!</h2>
            </div>
            <div className={'heroContainer__hero__right'}>
                <Link to={'/contact'}>
                    <img src={'/media/hero3.png'} alt={'hero phone'}/>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Hero;