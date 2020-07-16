import React from "react";

function SingleCard(props) {
  console.log("props", props)
  // const test = props.review.map()
  // console.log("test", test)
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
      <button id="review" onClick={console.log()}>Reviews</button>
      <br></br>
      <button id="addToCart" onClick={() => {addToCart({
                       id, 
                       itemname
                    })}}>Add to Cart</button>
      <button id="removeFromCart" onClick={() => {removeFromCart({
                        id,
                        itemname
                    })}}>Remove from Cart</button>
      {props.review.map(review => {return <span>{review.review}</span>})}
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
