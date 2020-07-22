import React, { useState } from "react";
import "./CheckOutPage.css";
import Button from "@material-ui/core/Button";
import StripeCheckout from "react-stripe-checkout";

function CheckOut() {
  const [product, setProduct] = useState({
    name: "Macbook Air",
    price: 1,
    productBy: "Arman",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:3000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("response", response);
        const { status } = response;
        console.log("status", status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="paymentOption">
        <StripeCheckout
          stripeKey="pk_test_51H5G6FHKLvPBIQUE2egI5yc4CZJZJN0QePhORcZt8ZTM8KkeFG9Eyq5oyWtOAs3BANHfVnou1Ly0V8AtJhFp14Zr0023jEgmfg"
          token={makePayment}
          name="Grace Shopper"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <Button className="paymentButton" variant="contained">
            Pay With Card
          </Button>
        </StripeCheckout>
      </div>
    </>
  );
}

export default CheckOut;
