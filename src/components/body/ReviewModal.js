import React, { useState } from "react";

function ReviewModal(review, setShow) {
  return (
    <div className="reviewModal">
      {review.map((singleReview) => {
        return <span>{singleReview}</span>;
      })}
    </div>
  );
}

export default ReviewModal;
