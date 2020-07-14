import React, { useState, useEffect } from "react";
import { BrowserRouter as Brouter, Switch, Route } from "react-router-dom";

import { getSomething } from "../api";
import Header from "./header/Header";
import Modal from "./header/Modal";

import "./App.css";
import ProductSection from "./body/ProductSection";
import Tabs from "../components/header/Tabs";
import Cart from "./cart/Checkout";

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
    <Brouter>
      <div className="App">
        <Route path="/cart" component={Cart} />
        <Header />
        <Tabs />
        <ProductSection />
      </div>
    </Brouter>
  );
};

export default App;
