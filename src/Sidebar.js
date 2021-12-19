import React from 'react';
import './Sidebar.css';
import StarRateTwoTone from '@material-ui/icons/StarRateTwoTone';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Sidebar = (props) => {

    return (
        <div className="sidebarContainer">
            <ShoppingCartIcon />
            <div className="savedProducts">
            {props.isSaved.map((product) => {
                return (
                    <div className="singleSavedProduct">
                        <h1 className="productRanking"><StarRateTwoTone /></h1>
                        <p className="specialSidebarProduct">{product}</p>
                        <h3><CancelIcon /></h3>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Sidebar
