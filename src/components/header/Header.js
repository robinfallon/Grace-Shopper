import React, { useState } from "react";
import "./Header.css";
import WelcomeBar from "./WelcomeBar";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <WelcomeBar />}
      <div className="header">
        <div className="rose">Grace Shopper</div>
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search Gracefully" required />
            </div>
            <div className="td" id="s-cover">
              <button type="submit" className="submit">
                <div id="s-circle"></div>
                <span></span>
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
          Log in or Sign up!
        </button>
      </div>
    </>
  );
}

export default Header;
