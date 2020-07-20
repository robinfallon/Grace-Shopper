import React, { useState } from "react";
import "./Modal.css";
import { loginUser, registerUser } from "../../api/index";

<<<<<<< HEAD
=======
function helloWorld() {
  console.log("hello, world");
}

>>>>>>> 5a863bef814975cab16239a5e49a9d563a7ef738
function Modal({ setShowModal, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [regispassword, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const changeUser = (event) => {
    setUsername(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const confirmPassword = (event) => {
    setConfirm(event.target.value);
  };

  const cancelCourse = () => {
    setUsername("");
    setPassword("");
    setConfirm("");
    setShowModal(false);
  };

  const handleRegis = (event) => {
    event.preventDefault();
    if (password === regispassword) {
      registerUser(username, password, email).then(() => {
        cancelCourse();
      });
    } else {
      alert("Passwords need to match!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    loginUser(username, password).then((user) => {
      setUser(user);
=======
    loginUser(username, password).then(() => {
      setUser(username)
>>>>>>> 5a863bef814975cab16239a5e49a9d563a7ef738
      cancelCourse();
    })
  };

  return (
    <div className="welcome">
      <div className="loginSection">
        <div
          className="theBlur"
          onClick={() => {
            setShowModal(false);
          }}
        ></div>
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            ></input>
            <label
              for="tab-1"
              className="tab"
              onClick={() => {
                setShowSignUp(false);
              }}
            >
              Sign In
            </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="sign-up"
            ></input>
            <label
              for="tab-2"
              className="tab"
              onClick={() => {
                setShowSignUp(true);
              }}
            >
              Sign Up
            </label>
            <div className="login-form">
              {showSignUp ? (
                <div className="sign-up-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      onChange={changeUser}
                    ></input>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      onChange={changePassword}
                    ></input>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Repeat Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      onChange={confirmPassword}
                    ></input>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Email Address
                    </label>
                    <input
                      id="pass"
                      type="text"
                      className="input"
                      onChange={changeEmail}
                    ></input>
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      value="Sign Up"
                      onClick={handleRegis}
                    ></input>
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <label for="tab-1">Already Member? </label>
                  </div>
                </div>
              ) : (
                <div className="sign-in-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      onChange={changeUser}
                    ></input>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      onChange={changePassword}
                    ></input>{" "}
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      checked
                    ></input>
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      value="Sign In"
                      onClick={handleSubmit}
                    ></input>
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
