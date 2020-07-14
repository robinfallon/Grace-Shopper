import React from "react";
import "./SingleCard.css";

function SingleCard(props) {
  console.log("props", props);
  // const test = props.review.map()
  // console.log("test", test)
  return (
    <div id="container">
      <div className="product-details">
        <h1>{props.itemname}</h1>

        <br />
        <div className="thebuttonarea">
          <button className="review" onClick={console.log()}>
            Reviews
          </button>
          <button className="addtocart" onClick={console.log()}>
            Add to Cart for only {props.price}
          </button>
        </div>
        {props.review.map((review) => {
          return <span>{review.review}</span>;
        })}
      </div>

      <div className="product-image">
        <img src={props.image} alt="Omar Dsoky" />

        <div className="info">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
