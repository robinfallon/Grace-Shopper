import React, { useState } from "react";
import "./Header.css";
import Modal from "./Modal";

function Header({ searchInput, setSearchInput }) {
  const [showModal, setShowModal] = useState(false);
<<<<<<< HEAD

  const [user, setUser] = useState("");
  console.log(user.token, "look at me");

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} setUser={setUser} />}
=======
  const [user, setUser] = useState("")
  console.log("USER!!!!", user);
  // useEffect(() => {
  //   getUserInfo().then(setUser);
  // }, [localStorage, showModal]);

  return (
    <>
      {showModal && <Modal setUser={setUser} setShowModal={setShowModal} />}
>>>>>>> 5a863bef814975cab16239a5e49a9d563a7ef738
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
<<<<<<< HEAD
        {user.id ? (
=======
        {user ? (
>>>>>>> 5a863bef814975cab16239a5e49a9d563a7ef738
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
