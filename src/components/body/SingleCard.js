import React, { useState } from "react";
import ReviewModal from "./ReviewModal";
import "./SingleCard.css";

function SingleCard(props) {
  // const [searchInput, setSearchInput] = useState("");
  console.log("props", props);
<<<<<<< HEAD
  const [reviewModal, setReviewModal] = useState(false);

=======
  // const products = props;
  // console.log(products);
>>>>>>> 4a9c25b238dced750dabe0332685e6720f8b1408
  // const test = props.review.map()
  // console.log("test", test)
  return (
    <>
      {reviewModal && (
        <ReviewModal setReviewModal={setReviewModal} reviews={props.review} />
      )}
      <div id="container">
        <div className="product-details">
          <h1>{props.itemname}</h1>

          <br />
          <div className="thebuttonarea">
            <button className="review" onClick={() => setReviewModal(true)}>
              Reviews
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
