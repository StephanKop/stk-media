import React from 'react';

const TitleDivider = (props: any) => {
    return (
        <div className={'titleDivider'}>
            <span/>
            <h2>{props.title}</h2>
            <span/>
        </div>
    );
};

export default TitleDivider;