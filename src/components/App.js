import React, { useState, useEffect } from "react";

import { getSomething } from "../api";
import Header from "./header/Header";
import WelcomeBar from "./header/WelcomeBar";
import DealOfTheDay from "./DealOfTheDay";
import "./App.css";
import ProductSection from "./ProductSection";

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
      <div className="gridthis">
        <WelcomeBar className="griditemone" />
        <DealOfTheDay className="griditemtwo" />
      </div>
      <ProductSection />
    </div>
  );
};

export default App;
