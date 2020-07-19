import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <div className="header">
        <div className="rose">Grace Shopper</div>
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search Gracefully" required />
            </div>
            <div className="td" id="s-cover">
              <button type="submit" className="submit">
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
                <span>Find</span>
              </button>
            </div>
          </div>
        </form>
        <button
          className="account"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Log in/Sign up!
        </button>
        <button className="thecartbtn">
          <a href="/cart">cart</a>
        </button>
      </div>
    </>
  );
}

export default Header;
