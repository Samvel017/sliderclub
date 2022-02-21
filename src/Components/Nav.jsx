import React from 'react';
import Profile from './Profile';
import logoIcon from '../Images/hand.png';
export default function Nav() {
  return (
    <div className="header">
      <div className="nav">
      <div className="logo">
        <img src={logoIcon} alt="" />
        <span>Slider Club</span>
      </div>
      <Profile />
      </div>
    </div>
  );
}
