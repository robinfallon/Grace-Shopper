import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal";

function Header({ searchInput, setSearchInput }) {
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState("");
  console.log(user.token, "look at me");

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} setUser={setUser} />}
      <div className="header">
        <div className="rose">Grace Shopper</div>
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                value={searchInput}
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
                type="text"
                placeholder="Search Gracefully"
                required
              />
            </div>
            <div className="td" id="s-cover"></div>
          </div>
        </form>
        {user.id ? (
          <button>Hello {user}!</button>
        ) : (
          <button
            className="account"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Log in/Sign up!
          </button>
        )}

        <button className="thecartbtn">
          <a href="/cart">cart</a>
        </button>
      </div>
    </>
  );
}

export default Header;
