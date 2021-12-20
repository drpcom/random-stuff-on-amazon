import React from 'react';
import './Sidebar.css';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Sidebar = (props) => {

    // const removeItemHandler = (productData) => {
    //     console.log(productData)
    //     props.setIsSaved(props.isSaved.filter(item => item.productData == productData))
    // }

    return (
        <div className="sidebarContainer">
        <ShoppingCartIcon />
        <div className="savedProducts">
        {props.isSaved.map((productData, index) => {
            return (
                <div key={index} className="singleSavedProduct">
                    <img className="productPic" src={productData[2]} alt={productData[0]} /> 
                    <p className="specialSidebarProduct" onClick={() => {window.open(`https://fakestoreapi.com/products/${productData[1]}`)}}>{productData[0]}</p>
                    <h3><CancelIcon onClick={() => {props.setIsSaved(props.isSaved.filter((e) => (e !== productData)))}} /></h3>
                </div>
                )
            })}
            </div>
            </div>
            )
}

export default Sidebar
