/* eslint-disable */
import React, { Component } from "react";
import { auth, googleAuthProvider } from "./firebase";

class SignIn extends Component {
  render() {
    return (
      <div
        className="SignIn"
        onClick={() => auth.signInWithPopup(googleAuthProvider)}
      >
        <button>Sign In</button>
      </div>
    );
  }
}

export default SignIn;
