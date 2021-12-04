import React from 'react'
import './Body.css';
import Sidebar from './Sidebar';
import CasinoIcon from '@material-ui/icons/Casino';

const Body = () => {
    return (
        <div className='bodyContainer'>
            <div className="dice">
            <CasinoIcon />
            <h1>Roll!</h1>
            </div>
            <div className='items'>
                <h1>Random Item 1</h1>
                <h1>Random Item 2</h1>
                <h1>Random Item 3</h1>
                <h1>Random Item 4</h1>
                <h1>Random Item 5</h1>
            </div>
            <Sidebar />
        </div>
    )
}

export default Body
