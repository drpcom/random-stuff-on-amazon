import React, {createContext} from 'react';

//initial state
// const initialState = {
//     savedList: localStorage.getItem('savedList') ? JSON.parse(localStorage.getItem('savedList')) : [],
// }

//creat context
export const GlobalContext = createContext(null);


//provider components
export const GlobalProvider = props => {


    return (
        <div>
            
        </div>
    )
}

