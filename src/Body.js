import React, {useState, useEffect} from 'react';
import './Body.css';
import Sidebar from './Sidebar';
import CasinoIcon from '@material-ui/icons/Casino';
import LoadingSpinner from './LoadingSpinner';

const Body = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(() => {
        handleFetch();
         //eslint-disable-next-line
    },[]);
    
    const handleFetch = () => {
        setIsLoading(true);
        fetch("https://fakestoreapi.com/products")
        .then((response)=> response.json())
        .then((json)=> { 
            props.setProducts(json)
            setIsLoading(false)
        })
        .catch(() => {
            setErrorMessage("Unable to load products.");
            setIsLoading(false);
        })
    } 






    return (
        <div className='bodyContainer'>
            <div className="bColumn1">
                <div className="logo">
                    <h1>Random </h1>
                    <h1>Sh{<CasinoIcon onClick={handleFetch} disabled={isLoading} />}t</h1>
                    <h1>on Amazon</h1>
                    <h1>hint: keep refreshing the page.</h1>
                </div>
            </div>
            <div className='bColumn2'>
                {isLoading ? <LoadingSpinner /> : props.randomFiveProductCards()}
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <div className="bColumn3">
                <Sidebar products={props.products} isSaved={props.isSaved} setIsSaved={props.setIsSaved} />
            </div>
        </div>
    )
}

export default Body;
