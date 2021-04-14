import React from 'react';
import data from '../utils/card_data.json';

const Card = () => {
    const cardData = data;

    return (
        <div className={'cardContainer'}>
        {cardData.map((cardData: any, index) => (
                <article className={'cardContainer__card'} key={index}>
                    <h3>{cardData.name}</h3>
                    <img src={cardData.img} alt={'card'}/>
                    <p>{cardData.description}</p>
                </article>
            ))}
        </div>
        )
}

export default Card