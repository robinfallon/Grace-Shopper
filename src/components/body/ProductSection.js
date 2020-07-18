import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "./ProductSection.css";
import { getMyProducts } from "../../api/index";

function createResult(productData) {
  return (
    <SingleCard
      key={productData.id}
      itemname={productData.itemname}
      description={productData.description}
      price={productData.price}
      category={productData.category}
      image={productData.image}
      review={productData.reviews}
    />
  );
}

function SearchResults() {
  const [myProducts, setMyProducts] = useState([]);
  console.log(myProducts);
  useEffect(() => {
    getMyProducts().then(setMyProducts);
  }, []);
  return (
    <div className="resultArea">
      <dl className="productMap">{myProducts.map(createResult)}</dl>
    </div>
  );
}

export default SearchResults;
