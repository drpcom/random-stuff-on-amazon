import React from 'react'
import './Body.css';
import Sidebar from './Sidebar';
import CasinoIcon from '@material-ui/icons/Casino';
import RandomItem from './RandomItem';

import hotwheel from './images/hotwheel.jpg';
import sweater from './images/sweater.jpg';
import chocolates from './images/chocolates.jpg';
import socks from './images/socks.jpg';
import oculus from './images/oculus.jpg';

const Body = () => {
    return (
        <div className='bodyContainer'>
            <div className="dice">
            <CasinoIcon />
            <h1>Roll!</h1>
            </div>
            <div className='items'>
                <RandomItem 
                id="8829530"
                pic={hotwheel} 
                title="Race Track for Boys and Kids, 240PCS Flexible Zero Gravity Magic Car Tracks Glow in The Dark, Train Toys for 3 4 5 6 Year Old Boys Girls with LED Light Up..." 
                rating={3}
                price={19.99} />
                <RandomItem 
                id="8829530"
                pic={sweater} 
                title="Sweaters for Women Lightweight V Neck Long" 
                rating={5}
                price={38.99} />
                <RandomItem 
                id="8829530"
                pic={chocolates}
                title="Ferrero Rocher Collection, Fine Hazelnut Milk Chocolates, 48 Count, Gift Box, Assorted Coconut Candy and Chocolates," 
                rating={4}
                price={5.99} />
                <RandomItem 
                id="8829530"
                pic={socks} 
                title="Wool Socks for Women - 5 Pairs Warm Socks, Winter Socks" 
                rating={2} 
                price={10.99} />
                <RandomItem 
                id="8829530"
                pic={oculus}
                title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB" 
                rating={5}
                price={249.99} />
            </div>
            <Sidebar />
        </div>
    )
}

export default Body
