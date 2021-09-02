import React from 'react';

export default function centerCard(props){
    const {children} = props;
    return (
        <div className="centercard">
            <span>
                {children}
            </span>
        </div>
    )
}