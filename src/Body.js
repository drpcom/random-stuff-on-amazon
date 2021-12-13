import React, {useState, useEffect} from 'react';
import './Body.css';
import Sidebar from './Sidebar';
import CasinoIcon from '@material-ui/icons/Casino';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';

const Body = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        handleFetch();
    },[]);
    
    const handleFetch = () => {
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products")
        .then((response)=> response.json())
        .then((json)=> { 
            setProducts(json)
            setIsLoading(false)
        })
        .catch(() => {
            setErrorMessage("Unable to load products.");
            setIsLoading(false);
        })
    }

    const Shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    Shuffle(products);

    return (
        <div>
        {isLoading ? <LoadingSpinner /> :
        <div className='bodyContainer'>
            <div className="bColumn1">
                <div className="logo">
                    <h1>Random </h1>
                    <h1>Sh{<CasinoIcon />}t</h1>
                    <h1>on Amazon</h1>
                    <h1>hint: keep refreshing the page.</h1>
                </div>
                <div className="dice">
                    <CasinoIcon />
                    <h1>Roll!</h1>
                </div>
            </div>
            <div className='bColumn2'>
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
                })}
                </div>
            <div className="bColumn3">
                <Sidebar />
            </div>
        </div>}
        </div>
    )
}

export default Body;
