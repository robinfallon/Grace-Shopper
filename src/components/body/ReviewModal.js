import React, { useState } from "react";
import "./ReviewModal.css";

function ReviewModal({ reviews, setShow }) {
  return (
    <div className="reviewModalSection">
      <div
        className="Blurred"
        onClick={() => {
          setShow(false);
        }}
      ></div>
      <div className="reviewModal">
        <h2 className="reviewHead">Reviews</h2>
        <div className="list">
          <ol>
            {reviews.map(([singleReview]) => {
              return <li>{singleReview.review}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
