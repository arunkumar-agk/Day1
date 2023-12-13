import React from 'react';
import './Signup.css'; // Make sure to create a corresponding CSS file for styling

function Signup() {
  return (
    <div className="center">
      <h1>Signup</h1>
      <form>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="email" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <input type="submit" value="Signup" />
        <div className="login_link">
          Already a member? <a href="login.html">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
