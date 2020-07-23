import React, { useState } from "react";
import Header from "./header/Header";
import ProductPage from "./body/ProductPage";
import Footer from "../components/footer/Footer";

function Main() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <ProductPage searchInput={searchInput} setSearchInput={setSearchInput} />
      <Footer />
    </>
  );
}

export default Main;
