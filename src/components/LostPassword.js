import React, { Component } from "react";
import './main.css'

export default class LostPassword extends Component {
    render() {
        return (
<body>
    <div className="login-page">
      <div className="box">
      <div className="left">
      <h3>Create an account?</h3>
      <a href="/sign-up" className="register-btn">Register</a>
        </div>
        <div className="form">
            {/* Lost Password starts form here */}
        <div className="lost-password-form">
          <h3>Lost Password?</h3>
          <div className="form-group">
            <input type="text" placeholder="Email Address*" className="form-control"></input>
            </div>
            <button type="buttom" className="submit-btn">New password</button>
            <p><a href="/sign-up" className="register-btn">Register |</a> <a href="/sign-in" className="lost-pass-btn">Login</a></p>
          </div>
        </div>
      </div>
    </div>
</body>
        );
    }
}