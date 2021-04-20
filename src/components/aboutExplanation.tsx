import React from 'react';

const AboutExplanation = (props: any) => {

    return (
        <div className={'aboutContainer'}>
            <img src={'/media/pf.jpg'} alt={'About profile portrait'}/>
            <div className={'aboutContainer__text'}>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
            </div>
        </div>
    );
};

export default AboutExplanation;