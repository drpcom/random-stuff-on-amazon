import React from 'react'
import './Body.css';
import Sidebar from './Sidebar';
import CasinoIcon from '@material-ui/icons/Casino';
import RandomItem from './RandomItem';

const Body = () => {
    return (
        <div className='bodyContainer'>
            <div className="dice">
            <CasinoIcon />
            <h1>Roll!</h1>
            </div>
            <div className='items'>
                <RandomItem 
                title="Hotwheel Set" 
                pic="" 
                desc="This is an Ocean Avenue hotwheel set." 
                price="$19.99" />
                <RandomItem 
                title="Sweater" 
                pic="" 
                desc="The most comfortable sweater money can buy." 
                price="$38.99" />
                <RandomItem 
                title="Chocolate Candy" 
                pic="" 
                desc="Perfect for holiday season." 
                price="$5.99" />
                <RandomItem 
                title="Socks" 
                pic="" 
                desc="You get them as a gift every year. You know what this is." 
                price="$10.99" />
                <RandomItem 
                title="Oculus Rift" 
                pic="" 
                desc="This is the cool item." 
                price="$249.99" />
            </div>
            <Sidebar />
        </div>
    )
}

export default Body
