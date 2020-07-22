import React, { useState, useEffect } from "react";
import { updateCartForUser } from "../../api/Cart";

function ItemInCart(props) {
  console.log(props)
  const [number, setNumber] = useState(props.quantity);
  console.log("number", number);
  const addOne = () => {
    if (number) {
      setNumber(number + 1);
      updateCartForUser(number + 1, props.id)    }
  };
  const minusOne = () => {
    if (number > 1) {
      setNumber(number - 1);
      updateCartForUser(number - 1, props.id)
    } else {
      setNumber(number);
    }
  };
  console.log("props", props);
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
          <a href="#!" className="qty qty-minus" onClick={minusOne}>
            -
          </a>
          <input type="numeric" value={number} />
          <a href="#!" className="qty qty-plus" onClick={addOne}>
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
