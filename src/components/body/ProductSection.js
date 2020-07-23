import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "./ProductSection.css";
import { getMyProducts } from "../../api/index";

function createResult(productData) {
  return (
    <SingleCard
      key={productData.id}
      id={productData.id} //instead of {productData.id}?
      itemname={productData.itemname}
      description={productData.description}
      price={productData.price}
      category={productData.category}
      image={productData.image}
      review={productData.reviews}
    />
  );
}

function SearchResults({ searchInput }) {
  const [myProducts, setMyProducts] = useState([]);
  // console.log(myProducts);
  useEffect(() => {
    getMyProducts().then(setMyProducts);
  }, []);
  return (
    <div className="resultArea">
      <dl className="productMap">
        {myProducts
          .filter((product) => {
            const trimmedSearchInput = searchInput.toLowerCase();
            if (
              trimmedSearchInput === "" ||
              product.category.toLowerCase().includes(trimmedSearchInput) ||
              product.itemname.toLowerCase().includes(trimmedSearchInput) ||
              product.description.toLowerCase().includes(trimmedSearchInput)
            )
              return true;
          })
          .map(createResult)}
      </dl>
    </div>
  );
}

export default SearchResults;
