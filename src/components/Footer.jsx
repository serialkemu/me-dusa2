import React from 'react';
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import whatsapp from "../assets/images/whatsapp.png"
const Footer = () => {
  return (
    <div className="bg-info row">
      <p >&copy; serialkemu. All rights reserved.</p>

    <div className='text-center'>
      <p>Socials</p>
    <div className=''>
      <img src={twitter} alt="" style={{height:"1rem"}} />
      </div>
      <div>
      <img src={instagram} alt="" style={{height:"1rem"}} />
      </div>
      <div>
      <img src={linkedin} alt="" style={{height:"1rem"}} />
      </div>
      <div>
      <img src={twitter} alt="" style={{height:"1rem"}} />
      </div>
    </div>
       
     

    </div>
  );
};

export default Footer;
