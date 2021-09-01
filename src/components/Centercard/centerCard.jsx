import React from 'react';

export default function centerCard(props){
    const {tipo} = props
    return (
        <div className="centercard">
            <span>
                {tipo}
            </span>
        </div>
    )
}