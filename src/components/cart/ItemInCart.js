import React from "react";

function ItemInCart(props) {
  return (
    <div className="layout-inline row">
      <div className="col col-pro layout-inline">
        <img src={props.image} alt="/" />
        <p>{props.title}</p>
      </div>

      <div className="col col-price col-numeric align-center ">
        <p>${props.price}</p>
      </div>

      <div className="col col-qty layout-inline">
        <a href="#" className="qty qty-minus">
          -
        </a>
        <input type="numeric" />
        <a href="#" className="qty qty-plus">
          +
        </a>
      </div>

      <div className="col col-vat col-numeric">
        <p>TAX PRICE</p>
      </div>
      <div className="col col-total col-numeric">
        <p> TOTAL PER ITEM</p>
      </div>
    </div>
  );
}

export default ItemInCart;
