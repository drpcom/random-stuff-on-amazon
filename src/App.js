import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ProductCard from "./components/ProductCard";
import Footers from "./components/Footers";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaved, setIsSaved] = useState(() => {
    const saved = localStorage.getItem("isSaved");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const Randomize = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  Randomize(products);

  // Render out five Product Card components.
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
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            );
          } else {
            return null;
          }
        })}
      </React.Fragment>
    );
  };

  return (
    <div className="appContainer">
      <Header />
      <Body
        products={products}
        setProducts={setProducts}
        randomFiveProductCards={randomFiveProductCards}
        isSaved={isSaved}
        setIsSaved={setIsSaved}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <Footers />
    </div>
  );
}

export default App;
