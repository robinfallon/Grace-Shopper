import React from "react";
import "./ReviewModal.css";

//WE NEED HEEEEELLLLLPPPPPPPP
function ReviewModal(props) {
  console.log("test", props);
  return (
    <div className="mainreview">
      {/* <div
        className="theBlur"
        onClick={() => {
          setShowModal(false);
        }}
      ></div> */}
      <div className="reviewwrapper"></div>
    </div>
  );
}

// { props.review.map(review => { return <span>{review[0]}</span> }) }

// single card should pass the array of review into popup modal
// then you can have a comp called review that the modal can loop
// through array of reviews that can loop through
// function reviewModal({ setShowModal }) {
//   return
// }

export default ReviewModal;
