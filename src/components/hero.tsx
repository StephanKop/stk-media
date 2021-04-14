import React, { useEffect } from 'react';

const Hero = () => {
    let i = 0;
    const txt = 'Design, Development en UX?'; /* The text */
    const speed = 50; /* The speed/duration of the effect in milliseconds */
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
    }, [])
    return (
        <div className={'heroContainer'}>
        <div className={'heroContainer__hero'}>
            <div className={'heroContainer__hero__left'}>
                <h1><span id={'typewriter1'}></span><span className={'caret'}>&nbsp;</span></h1>
                {/*<h1 id={'typewriter1'}>Design, Development en UX?</h1>*/}
                <h2 id={'typewriter2'}>Het is allemaal mogelijk!<span>&nbsp;</span></h2>
            </div>
            <div className={'heroContainer__hero__right'}>
                <img src={'/media/Black-2048x1346.png'}/>
            </div>
        </div>
        </div>
    )
}

export default Hero;