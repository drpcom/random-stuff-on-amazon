import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {

    const linkToProduct = () => {
        window.open(`https://fakestoreapi.com/products/${props.id}`)
    }

    const addProductToSidebar = () => {

    }

    return (
        <div className="productContainer">
            <div className="productImage" onClick={linkToProduct}>
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
            <div className="productPriceAndSave">
                <h1>${props.price}</h1>
                <button onClick={() => {props.setIsSaved([...props.isSaved, props.title])}}>+ SAVE</button>
            </div>
        </div>
    )
}

export default ProductCard;
