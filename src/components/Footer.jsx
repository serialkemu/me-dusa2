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
    <div className='p-4 row'>
      <p>Socials</p> 
    <div className='col'>
      <a href=''>
      <img src={twitter} alt="..l" style={{height:"2rem"}} />
      </a> 
      </div>
      <div className='col'>
      <a href=''><img src={instagram} alt="" style={{height:"2rem"}} />
      </a>
      </div>
      <div className='col'>
      <a href=''><img src={linkedin} alt="" style={{height:"2rem"}} />
      </a>
      </div>

    </div>
       
     

    </div>
  );
};

export default Footer;
