import React from "react";
import "./CartHeader.css";
import { Link } from "react-router-dom";

function CartHeader() {
  return (
    <div className="headerCart">
      <Link to="/">
        <div className="roseCart">Grace Shopper</div>
      </Link>
    </div>
  );
}

export default CartHeader;
