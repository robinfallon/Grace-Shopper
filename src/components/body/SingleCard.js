import React from "react";
import "./SingleCard.css";

function SingleCard(props) {
  // const [searchInput, setSearchInput] = useState("");
  console.log("props", props);
  // const products = props;
  // console.log(products);
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
          <a class="bt more-bt">
            <span class="fl"></span>
            <span class="sfl"></span>
            <span class="cross"></span>
            <i></i>
            <p>Add for ${props.price}</p>
          </a>
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
