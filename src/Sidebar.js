import React from 'react';
import './Sidebar.css';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Sidebar = (props) => {

    // const removeItemHandler = (productData) => {
    //     console.log(productData)
    //     props.setIsSaved(props.isSaved.filter(item => item.productData == productData))
    // }

    return (
        <div className="sidebarContainer">
        <ShoppingBasketIcon />
        <div className="savedProducts">
        {props.isSaved.map((productData, index) => {
            return (
                <div key={index} className="singleSavedProduct">
                    <img className="productPic" src={productData[2]} alt={productData[0]} /> 
                    <p className="specialSidebarProduct" onClick={() => {window.open(`https://fakestoreapi.com/products/${productData[1]}`)}}>{productData[0]}</p>
                    <h3><RemoveIcon onClick={() => {props.setIsSaved(props.isSaved.filter((e) => (e !== productData)))}} /></h3>
                </div>
                )
            })}
            </div>
            </div>
            )
}

export default Sidebar
