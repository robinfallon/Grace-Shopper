import React, { useState, useEffect } from "react";

import { getSomething } from "../api";
import Header from "./header/Header";
import Modal from "./header/Modal";
import DealOfTheDay from "./DealOfTheDay";
import "./App.css";
import ProductSection from "./ProductSection";
import Tabs from "../components/header/Tabs";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSomething()
      .then((response) => {
        setMessage(response.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });

  return (
    <div className="App">
      <Header />
      <Tabs />
      <ProductSection />
    </div>
  );
};

export default App;
