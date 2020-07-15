import React, { useState, useEffect } from "react";
import { BrowserRouter as Brouter, Switch, Route } from "react-router-dom";
import { getSomething } from "../api";

import Modal from "./header/Modal";
import "./App.css";
import Cart from "./cart/CartPage";
import Main from "./Main";

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
        <Switch>
          <Route path="/cart" component={Cart} />
          <Main path="/" component={Main} />
        </Switch>
      </div>
    </Brouter>
  );
};

export default App;
