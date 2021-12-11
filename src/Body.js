import React, {useState, useEffect} from 'react';
import './Body.css';
import Sidebar from './Sidebar';
import CasinoIcon from '@material-ui/icons/Casino';
import RandomItem from './RandomItem';

const Body = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((json)=> setProducts(json))
    },[]);
    console.log(products);

    return (
        <div className='bodyContainer'>
            <div className="bColumn1">
                <div className="logo">
                    <h1>Random Shit</h1>
                    <h1>on Amazon</h1>
                    <h1>hint: keep refreshing the page.</h1>
                </div>
                <div className="dice">
                    <CasinoIcon />
                    <h1>Roll!</h1>
                </div>
            </div>
            <div className='items'>
                {products.map((product, index) => {
                    if (index <= 4) {
                        return (
                            <RandomItem
                            key={product.id}
                            id={product.id}
                            pic={product.image}
                            title={product.title}
                            rating={3}
                            price={product.price}
                            />
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })}
                </div>
            <Sidebar />
        </div>
    )
}

export default Body
