import React, { useState } from "react";
import ReviewModal from "./ReviewModal";
import "./SingleCard.css";
import { addToCart, removeFromCart } from "../../api/Cart";

function SingleCard(props) {
  // const [searchInput, setSearchInput] = useState("");
  // console.log("props", props);
  const [reviewModal, setReviewModal] = useState(false);
  const custId = localStorage.getItem('id')
  const quantity = 1;
  console.log("customer ID=", custId)
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
              id="addToCart"
              onClick={() => {
                addToCart(props.id, custId, quantity);
              }}
            >
              Add to Cart
            </button>
            <button
              id="removeFromCart"
              onClick={() => {
                removeFromCart(props.id);
              }}
            >
              Remove from Cart
            </button>
            <a class="bt more-bt">
              <span class="fl"></span>
              <span class="sfl"></span>
              <span class="cross"></span>
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
