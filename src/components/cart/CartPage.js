import React from "react";
import CheckOut from "./CheckOut";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";

function Checkout() {
  return (
    <div>
      <CartHeader />
      <CartBody />
      <CheckOut />
    </div>
  );
}

export default Checkout;
