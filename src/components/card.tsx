import React from 'react';
import data from '../utils/card_data.json';
import { Link } from "react-router-dom";

const Card = () => {
    const cardData = data;

    return (
        <div>
            <h2 className={'cardTitle'}>Services</h2>
            <div className={'cardContainer'}>
            {cardData.map((cardData: any, index) => (
                    <article className={'cardContainer__card'} key={index}>
                        <Link to={cardData.link}>
                            <h3>{cardData.name}</h3>
                            <img src={cardData.img} alt={'card icon'}/>
                            <p>{cardData.description}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
        )
}

export default Card