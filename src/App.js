import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import { GlobalContext } from './GlobalState';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="appContainer">
    <GlobalContext.Provider value={{products, setProducts}}>
      <Header />
      <Body />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
