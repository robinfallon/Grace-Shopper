import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal";

function logout() {
  localStorage.clear();
  window.location.reload(true);
}

function Header({ searchInput, setSearchInput }) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = React.useState(localStorage.getItem("user"));

  return (
    <>
      {showModal && <Modal setUser={setUser} setShowModal={setShowModal} />}
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
        {user ? (
          <div className="userNameLogout">
            <button>Hello {user}!</button>
            <button onClick={logout}>Logout?</button>
          </div>
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
        {user ? (
          <button className="thecartbtn">
            <a href="/cart">cart</a>
          </button>
        ) : (
          <div className="makethataccount">Want cart access? Sign up!</div>
        )}
      </div>
    </>
  );
}

export default Header;
