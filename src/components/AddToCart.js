import React, { useState } from "react";

/*useState an initial value for the state, and returns an 
array with 2 things in it: the current state, and a way to update it*/

import "./AddToCart.css";


const AddToCart = ({
    //props:
    currentUser, // ???
    addToCart,
    removeFromCart
}) => {
    return (
        <div className="cartButtons">
            <button className="addToCartButton"
                onClick={() => {
                    addToCart({
                       id, 
                       itemname
                    })
                }} 
            >Add to cart 
            </button>
            <button className="removeFromCartButton"
                onClick={() => {
                    removeFromCart({
                        id,
                        itemname
                    })
                }}
            >Remove from cart
            </button>
        </div>
    );
}


export default AddToCart;

