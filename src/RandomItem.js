import React from 'react';
import './RandomItem.css';

const RandomItem = (props) => {
    return (
        <div className="randomItemContainer">
            <img src={props.pic} alt={props.title} />
            <h1>{props.title}</h1>
            <h1>{props.desc}</h1>
            <h1>{props.rating}</h1>
            <h1>{props.price}</h1>
        </div>
    )
}

export default RandomItem
