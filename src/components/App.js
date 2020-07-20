import React from "react";
import { BrowserRouter as Brouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Cart from "./cart/CartPage";
import Main from "./Main";

const App = () => {
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
