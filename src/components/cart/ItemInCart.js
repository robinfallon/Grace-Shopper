import React, { useState, useEffect } from "react";
import { updateCartForUser } from "../../../db";

function ItemInCart(props) {
  const [number, setNumber] = useState(1);
  console.log("number", number);
  const addOne = () => {
    if (number) {
      let quantity =
      setNumber(number + 1);
      updateCartForUser(props.id, quantity)    }
  };
  const minusOne = () => {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      setNumber(number);
    }
  };
  console.log(props);
  return (
    <>
      <div className="layout-inline row">
        <div className="col col-pro layout-inline">
          {/*<img src={props.image} alt="/" />*/}
          <p>{props.itemname}</p>
        </div>

        <div className="col col-price col-numeric align-center ">
          <p>${props.price}</p>
        </div>

        <div className="col col-qty layout-inline">
          <a href="#" className="qty qty-minus" onClick={minusOne}>
            -
          </a>
          <input type="numeric" value={number} />
          <a href="#" className="qty qty-plus" onClick={addOne}>
            +
          </a>
        </div>

        <div className="col col-vat col-numeric">
          <p>7%</p>
        </div>
        <div className="col col-total col-numeric">
          <p>{Math.round(props.price * number * 1.07 * 100) / 100}</p>
        </div>
      </div>
    </>
  );
}

export default ItemInCart;
