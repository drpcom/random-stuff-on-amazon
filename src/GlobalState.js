import React, {createContext, useState} from 'react';
import ProductCard from './ProductCard';

//initial state
// const initialState = {
//     savedList: localStorage.getItem('savedList') ? JSON.parse(localStorage.getItem('savedList')) : [],
// }

//creat context
export const GlobalContext = createContext(null);


//provider components
export const GlobalProvider = props => {

    const [products, setProducts] = useState([]);

    const randomFiveProductCards = () => {
        return (
            <React.Fragment>
            {products.map((product, index) => {
                if (index <= 4) {
                    return (
                            <ProductCard
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
            })
            }
            </React.Fragment>
        )


    }
    return (
        <GlobalContext.Provider>
            {props.children}
        </GlobalContext.Provider>       
    )
}

