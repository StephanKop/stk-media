import React from 'react';

const Explanation = (props: any) => {
    return (
        <article className={'explanationContainer'}>
            <h2>{props.title}</h2>
            <div className={'explanationContainer__paragraphs'}>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
            </div>
        </article>
    )
}

export default Explanation;