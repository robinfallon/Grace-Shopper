import React from "react";

function SingleCard(props) {
  return (
    <div id="container">
      <div class="product-details">
        <h1>{props.itemname}</h1>

        {/*  <span class="hint-star star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
  </span>*/}
      </div>

      <div class="product-image">
        <img src={props.image} alt="Omar Dsoky" />

        <div class="info">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
