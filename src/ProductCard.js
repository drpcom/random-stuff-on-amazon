import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    const linkToProduct = () => {
        window.open(`https://fakestoreapi.com/products/${props.id}`)
    }

    return (
        <div className="productContainer" onClick={linkToProduct}>
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

export default ProductCard;
