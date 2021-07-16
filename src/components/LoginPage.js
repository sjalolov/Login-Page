import React, { Component } from "react";
import './LoginPage.css'

export default class Login extends Component {
    render() {
        return (
<body>
    <div className="login-page">
      <div className="box">
      <div className="left">
          <h3>Create an Account</h3>
          <a href="/sign-up" className="register-btn">Register</a>
        </div>
        <div className="form">
            {/* Log in form Starts */}
        <div className="login-form">
          <h3 href="/sign-in">LogIn</h3>
          <div className="form-group">
            <input type="text" placeholder="Email Address*" className="form-control"></input>
            </div>
            <div className="form-group">
            <input type="password" placeholder="Password*" className="form-control"></input>
          </div>
          <div className="form-group">
            <label>
               <input type="checkbox"/> Remember Me
            </label>
          </div>
            <button type="buttom" className="submit-btn">Login</button>
            <p><a href="/sign-up" className="register-btn">Register |</a> <a href="/lost-password" className="lost-pass-btn">Lost Your Password?</a></p>
          </div>
        </div>
      </div>
    </div>
</body>
        );
    }
}