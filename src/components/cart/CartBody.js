import React, { useState, useEffect } from "react";
import "./CartBody.scss";
import ItemInCart from "./ItemInCart";
import CheckOut from "./CheckOutPage";
import { showMyCart } from "../../api/Cart";

function createLineItem(lineData) {
  return (
    <ItemInCart
      key={lineData.id}
      id={lineData.id}
      itemname={lineData.itemname}
      price={lineData.price}
      image={lineData.image}
      quantity={lineData.quantity}
    />
  );
}

function CartBody() {
  const userId = localStorage.getItem("id");

  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    showMyCart().then(setUserCart);
  }, []);
  console.log("usercart", userCart);
  console.log();

  return (
    <div className="cartBodySection">
      <div className="container">
        <div className="heading">
          <h1>
            <span className="shopper"></span> Shopping Cart
          </h1>
        </div>

        <div className="cart transition is-open">
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>
              <div className="col">Tax</div>
              <div className="col">Total</div>
            </div>
            <div className="allMystuff">{userCart.map(createLineItem)}</div>

            <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>Shipping</p>
                </div>
                <div className="col totalShipping"></div>
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total</p>
                </div>
                <div className="col totalPrice"></div>
              </div>
            </div>
          </div>
        </div>
        <CheckOut />
      </div>
    </div>
  );
}

export default CartBody;
