import React, { Component } from "react";
import './LoginPage.css'

export default class Register extends Component {
    render() {
        return (
<body>
    <div className="login-page">
      <div className="box">
      <div className="left">
      <h3>Already have an account</h3>
      <a href="/sign-in" className="register-btn">LogIn</a>
        </div>
        <div className="form">
            {/* Log in form Starts */}
        <div className="login-form">
          <h3>Register</h3>
          <div className="form-group">
            <input type="text" placeholder="Fist Name*" className="form-control"></input>
            </div>
            <div className="form-group">
            <input type="text" placeholder="Last Name*" className="form-control"></input>
            </div>
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
            <button type="buttom" className="submit-btn">Register</button>
            <p><a href="/sign-in" className="register-btn">Login</a> </p>
          </div>
            </div>
      </div>
    </div>
</body>
        );
    }
}