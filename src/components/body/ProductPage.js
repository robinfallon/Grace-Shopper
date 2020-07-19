import React from "react";
import ProductSection from "./ProductSection";
import Tabs from "../header/Tabs";

function ProductPage({ searchInput, setSearchInput }) {
  return (
    <>
      <Tabs searchInput={searchInput} setSearchInput={setSearchInput} />
      <ProductSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </>
  );
}

export default ProductPage;
