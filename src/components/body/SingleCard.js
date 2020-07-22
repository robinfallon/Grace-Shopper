import React, { useState } from "react";
import ReviewModal from "./ReviewModal";
import "./SingleCard.css";
import { addToCart, removeFromCart } from "../../api/Cart";

function SingleCard(props) {
  // const [searchInput, setSearchInput] = useState("");
  // console.log("props", props);
  const [reviewModal, setReviewModal] = useState(false);
  const userId = localStorage.getItem('id')
  let quantity = 1;
  console.log("customer ID=", userId)
  // const test = props.review.map()
  // console.log("test", test)
  console.log("props", props);

  return (
    <>
      {reviewModal && (
        <ReviewModal setShow={setReviewModal} reviews={props.review} />
      )}
      <div id="container">
        <div className="product-details">
          <h1>{props.itemname}</h1>

          <br />
          <div className="thebuttonarea">
            <button className="review" onClick={() => setReviewModal(true)}>
              Reviews
            </button>
            <br></br>
              <button
              id="removeFromCart"
              onClick={() => {
                removeFromCart(props.id);
              }}
            >
              Remove from Cart
            </button>
            <a className="bt more-bt"     
            id="addToCart"
              onClick={() => {
                addToCart(userId, props.id, quantity, props.itemname, props.price);
              }}>
              <span className="fl"></span>
              <span className="sfl"></span>
              <span className="cross"></span>
              <i></i>
              <p>Add for ${props.price}</p>
            </a>
          </div>
        </div>

        <div className="product-image">
          <img src={props.image} alt="Omar Dsoky" />

          <div className="info">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
