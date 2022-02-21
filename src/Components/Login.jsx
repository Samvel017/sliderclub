import React from 'react';
import Google from './Google';
import handIcon from '../Images/hand.png';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-title">
          <img src={handIcon} alt="" />
          <h3>Slider Club</h3>
        </div>
        <div className="login-description">
          <p>
            Sign up to share your presenntation on Slider App. 
            <br />
            We can't wait for
            you to join!
          </p>
        </div>
        <Google />
        <div className="login-info">
          <span>Preview existing presentation? Click here to enter code</span>
        </div>
      </div>
    </div>
  );
}
