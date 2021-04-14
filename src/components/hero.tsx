import React, { useEffect } from 'react';

const Hero = () => {
    let i = 0;
    let a = 0;
    const txt = 'Design, Development en UX?';
    const txt2 = 'Het is allemaal mogelijk!';
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
                <h2><span id={'typewriter1'}></span><span>&nbsp;</span></h2>
                {/*<h1 id={'typewriter1'}>Design, Development en UX?</h1>*/}
                <h2>Het is allemaal mogelijk!</h2>
            </div>
            <div className={'heroContainer__hero__right'}>
                <img src={'/media/Black-2048x1346.png'} alt={'hero phone'}/>
            </div>
        </div>
        </div>
    )
}

export default Hero;