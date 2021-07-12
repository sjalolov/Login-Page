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
        <div className="form form-hidden">
          {/* Log in form Starts */}
          <h3>Login</h3>
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
            <p><a href="//#region" className="register-btn">Register</a>|<a href="//#region" className="lost-pass-btn">Lost Your Password?</a></p>
        </div>
    {/* Log in form Ends */}
    {/* Register form Starts */}
      <div className="form">
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
          <div>
            <button type="buttom" className="submit-btn">Register</button>
            <p><a href="//#region" className="login-btn">Login</a>|<a href="//#region" className="lost-pass-btn">Lost Your Password?</a></p>
          </div>
        {/* Register form Ends */}
       </div>
      </div>
    </div>
 </body>

);
  
  export default Loginpage;