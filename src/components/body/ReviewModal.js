import React, { useState } from "react";

function ReviewModal({ reviews, setShow }) {
  return (
    <div className="reviewModal">
      {reviews.map(([singleReview]) => {
        return <span>{singleReview.review}</span>;
      })}
    </div>
  );
}

export default ReviewModal;
