import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
import "./ProductSection.css";

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

async function getMyProducts() {
  const myProducts = await axios.get("/api/products");
  console.log("My products are", myProducts);
  return myProducts.data.allProducts;
}

function SearchResults() {
  const [myProducts, setMyProducts] = useState([]);
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
