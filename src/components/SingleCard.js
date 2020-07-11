import React, { useState } from "react";
import ReviewModal from "./header/ReviewModal";

//WE NEED HEEEEELLLLLPPPPPPPP
function SingleCard(props) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  console.log("singlecard", props);
  // const test = props.review.map()
  // console.log("test", test)

  return (
    <>
      {showReviewModal && (
        <ReviewModal setShowReviewModal={props.review[0][0].review} />
      )}
      <div id="container">
        <div class="product-details">
          <h1>{props.itemname}</h1>
          <button
            id="review"
            onClick={() => {
              setShowReviewModal(!showReviewModal);
            }}
          >
            Reviews
          </button>
        </div>

        <div class="product-image">
          <img src={props.image} alt="Omar Dsoky" />

          <div class="info">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
