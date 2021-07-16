import React from 'react';

import './LoginPage.css';

const Loginpage = () => (

  <body>
    <div className="login-page">
      <div className="box">
        <div className="left">
          <h3>Create an Account</h3>
          <button type="button" className="register-btn">Register</button>
        </div>
        <div className="right">
        <h3>Have an Account</h3>
          <button type="button" className="login-btn">Login</button>
        </div>
      <div className="form">
        {/* Log in form Starts */}
        <div className="login-form form-hidden">
          <h3>LogIn</h3>
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
            <p><a href="//#region" className="register-btn">Register |</a> <a href="//#region" className="lost-pass-btn">Lost Your Password?</a></p>
        </div>
      {/* Log in form Ends */}
      {/* Register form Starts */}
        <div className="register-form ">
          <h3>Register</h3>
          <div className="form-group">
            <input type="text" placeholder="First Name*" className="form-control"></input>
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
            <button type="buttom" className="submit-btn" >Register</button>
            <p><a href="//#region" className="login-btn">Login |</a> <a href="//#region" className="lost-pass-btn">Lost Your Password?</a></p>
        </div>
            {/* Registerform Ends */}
            {/* Lost Password form Starts */}
        <div className="lost-password-form form-hidden">
          <h3>Lost Your Password?</h3>
          <h5>Check you mailbox to create new password.</h5>
          <div className="form-group">
            <input type="text" placeholder="Email Address*" className="form-control"></input>
          </div>
            <button type="buttom" className="submit-btn">Reset Password</button>
            <p><a href="//#region" className="login-btn">Login |</a> <a href="//#region" className="register-btn">Register</a></p>
        </div>
            {/* Lost Password form Ends */}
      </div>
      </div>
    </div>
 </body>

);
  
  export default Loginpage;