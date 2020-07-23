import React, { useState } from "react";
import ReviewModal from "./ReviewModal";
import "./SingleCard.css";
import { addToCart } from "../../api/Cart";

function SingleCard(props) {
  const [reviewModal, setReviewModal] = useState(false);
  const userId = localStorage.getItem("id");
  let quantity = 1;

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

            <a
              href="#!"
              className="bt more-bt"
              id="addToCart"
              onClick={() => {
                addToCart(
                  userId,
                  props.id,
                  quantity,
                  props.itemname,
                  props.price,
                  props.image
                );
              }}
            >
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
