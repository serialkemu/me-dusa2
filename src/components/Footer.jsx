import React from 'react';
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import whatsapp from "../assets/images/whatsapp.png"
const Footer = () => {
  return (
    <div className="bg-transparent row flex">
      <div className=''>
        <p  className='' >&copy; serialkemu. All rights reserved.</p>

      </div>
    <div className='text-center'>
      <p>Socials</p>
    <div className=''>
      <a href=''>
      <img src={twitter} alt="" style={{height:"1rem"}} />
      </a> 
      </div>
      <div>
      <a href=''><img src={instagram} alt="" style={{height:"1rem"}} />
      </a>
      </div>
      <div>
      <a href=''><img src={linkedin} alt="" style={{height:"1rem"}} />
      </a>
      </div>
      <div>
      <a href=''><img src={twitter} alt="" style={{height:"1rem"}} />
      </a>
      </div>
    </div>
       
     

    </div>
  );
};

export default Footer;
