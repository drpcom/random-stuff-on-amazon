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
                pic={hotwheel} 
                title="Hotwheel Set" 
                desc="This is an Ocean Avenue hotwheel set." 
                rating="⭐⭐⭐⭐⭐"
                price="$19.99" />
                <RandomItem 
                pic={sweater} 
                title="Sweater" 
                desc="The most comfortable sweater money can buy." 
                rating="⭐⭐⭐⭐⭐"
                price="$38.99" />
                <RandomItem 
                pic={chocolates}
                title="Chocolate Candy" 
                desc="Perfect for holiday season." 
                rating="⭐⭐⭐⭐⭐"
                price="$5.99" />
                <RandomItem 
                pic={socks} 
                title="Socks" 
                desc="You get them as a gift every year. You know what this is."
                rating="⭐⭐⭐⭐⭐" 
                price="$10.99" />
                <RandomItem 
                pic={oculus}
                title="Oculus Rift" 
                desc="This is the cool item." 
                rating="⭐⭐⭐⭐⭐"
                price="$249.99" />
            </div>
            <Sidebar />
        </div>
    )
}

export default Body
