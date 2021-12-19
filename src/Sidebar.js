import React from 'react';
import './Sidebar.css';
import StarRateTwoTone from '@material-ui/icons/StarRateTwoTone';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Sidebar = (props) => {

    // const removeItemHandler = (productTitle) => {
    //     console.log(productTitle)
    //     props.setIsSaved(props.isSaved.filter(item => item.productTitle == productTitle))
    // }

    return (
        <div className="sidebarContainer">
        <ShoppingCartIcon />
        <div className="savedProducts">
        {props.isSaved.map((productTitle, index) => {
            return (
                <div key={index} className="singleSavedProduct">
                <h1 className="productRanking"><StarRateTwoTone /></h1>
                <p className="specialSidebarProduct">{productTitle}</p>
                <CancelIcon onClick={() => {props.setIsSaved(props.isSaved.filter((e) => (e !== productTitle)))}} />
                </div>
                )
            })}
            </div>
            </div>
            )
}

export default Sidebar
