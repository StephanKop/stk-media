import React, {useState} from 'react';

const ShowCase = (props: any) => {
    const [hover, setHover] = useState(false);

    // const styles = {
    //     background: {
    //         backgroundImage: `linear-gradient(130deg, rgba(108, 128, 227, 0.9) 10%, rgba(255, 255, 255, 0.0)), url(${props.backgroundImage})`,
    //         '&:hover': {
    //             backgroundImage: `linear-gradient(130deg, rgba(108, 128, 227, 0.5) 0%, rgba(255, 255, 255, 0.0)), url(${props.backgroundImage})`,
    //         },
    //     },
    // }

    const styles = {
        background: `linear-gradient(130deg, rgba(108, 128, 227, 0.9) 0%, rgba(255, 255, 255, 0.0)), url(${props.backgroundImage})`,
        background2: `linear-gradient(130deg, rgba(108, 128, 227, 0.9) 10%, rgba(255, 255, 255, 0.0)), url(${props.backgroundImage})`,
    }

    const handleMouseOver = () => {
        setHover(!hover);
    }

    return (
        // <div style={styles.background} className={'showcaseContainer'} onMouseOver={handleMouseOver}>
        <div style={{
            backgroundImage: !hover ? styles.background2 : styles.background,
            animation: hover ? 'fadeMe 0.2s ease forwards': ''
        }} className={'showcaseContainer'} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
            <div className={'showcaseContainer__text'}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ShowCase;