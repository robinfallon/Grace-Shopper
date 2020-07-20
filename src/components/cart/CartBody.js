import React from "react";
import "./CartBody.scss";
import ItemInCart from "./ItemInCart";
import CheckOut from "./CheckOut";

function CartBody() {

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

            <div className="tf">
              <div className="row layout-inline">
                <div className="col">
                  <p>Tax</p>
                </div>
                <div className="col totalTax"></div>
              </div>
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
