import React, { useEffect } from "react";
import "./Body.css";
import Sidebar from "./Sidebar";

const Body = (props) => {
  useEffect(() => {
    handleFetch();
    localStorage.setItem("isSaved", JSON.stringify(props.isSaved));
    //eslint-disable-next-line
  }, [props.isSaved]);

  const handleFetch = () => {
    props.setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        props.setProducts(json);
        props.setIsLoading(false);
      })
      .catch(() => {
        props.setErrorMessage("Unable to load products.");
        props.setIsLoading(false);
      });
  };

  return (
    <div className="bodyContainer">
      <div className="bColumn1"></div>
      <div className="bColumn2">{props.randomFiveProductCards()}</div>
      <div className="bColumn3">
        <Sidebar
          products={props.products}
          isSaved={props.isSaved}
          setIsSaved={props.setIsSaved}
        />
      </div>
    </div>
  );
};

export default Body;
