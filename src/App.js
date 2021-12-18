import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import ProductCard from './ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [isSaved, setIsSaved] = useState([]);

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
                        isSaved={isSaved}
                        setIsSaved={setIsSaved}
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
    <div className="appContainer">
      <Header />
      <Body 
      products={products} 
      setProducts={setProducts}
      randomFiveProductCards={randomFiveProductCards}
      isSaved={isSaved}
      setIsSaved={setIsSaved}
      />
    </div>
  );
}

export default App;
