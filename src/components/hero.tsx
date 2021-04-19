import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Hero = ( props: any ) => {
    let i = 0;
    const txt = props.typewriterTitle;
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
        <div className={'heroContainer'} style={{backgroundImage: `url(${props.backgroundImage})`}}>
        <div className={'heroContainer__hero'}>
            <div className={'heroContainer__hero__left'}>
                <h2><span id={'typewriter1'}/><span className={'caret'}>&nbsp;</span></h2>
                <h2>{props.subtitle}</h2>
            </div>
            <div className={'heroContainer__hero__right'} style={{display: props.display}}>
                <Link to={'/contact'}>
                    <img src={`/media/${props.heroImg}`} alt={'hero phone'}/>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Hero;