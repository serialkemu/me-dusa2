import React from 'react';
import twitter from "../assets/images/twitter.png"
import Xapp from '../assets/images/Xapp.png'
const Footer = () => {
  return (
    <div className="bg-info ">
      <p>&copy; serialkemu. All rights reserved.</p>
      <p>
        <img src={twitter} alt="" style={{height:"24px"}} />
        
      </p>
    </div>
  );
};

export default Footer;
