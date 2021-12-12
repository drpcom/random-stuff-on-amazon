import React from 'react';
import './RandomItem.css';

const RandomItem = (props) => {
    return (
        <div className="productContainer">
            <div className="productImage">
                <img src={props.pic} alt={props.title} />
            </div>
            <div className="productTitle">
                <h1>{props.title}</h1>
            </div>
            <div className="productRating">
                {Array(props.rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <div className="productPrice">
                <h1>${props.price}</h1>
            </div>
        </div>
    )
}

export default RandomItem
