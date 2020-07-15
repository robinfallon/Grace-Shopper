import React, { useState } from "react";
import "./Modal.css";
import { loginUser } from "../../api/index";

function helloWorld() {
  console.log("hello, world");
}

function Modal({ setShowModal }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const changeUser = (event) => {
    setUser(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const cancelCourse = () => {
    console.log("canceCourse Link 10 form.JS");
    setUser("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(username, password).then(() => {
      cancelCourse();
    });
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
            <label for="tab-1" className="tab">
              Sign In
            </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="sign-up"
            ></input>
            <label for="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
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
                  <label for="check">
                    <span className="icon"></span> Keep me Signed in
                  </label>
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
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label for="user" className="label">
                    Username
                  </label>
                  <input id="user" type="text" className="input"></input>
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
                  ></input>
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" className="input"></input>
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign Up"
                  ></input>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label for="tab-1">Already Member? </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
