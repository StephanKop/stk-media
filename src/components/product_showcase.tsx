import React from 'react';

const ShowCase = (props: any) => {

    const styles = {
        background: {
            backgroundImage: `linear-gradient(130deg, rgba(108, 128, 227, 0.9) 10%, rgba(255, 255, 255, 0.0)), url(${props.backgroundImage})`,
            '&:hover': {
                backgroundImage: `linear-gradient(130deg, rgba(108, 128, 227, 0.5) 0%, rgba(255, 255, 255, 0.0)), url(${props.backgroundImage})`,
            },
        },
    }

    return (
        <div style={styles.background} className={'showcaseContainer'}>
            <div className={'showcaseContainer__text'}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ShowCase;