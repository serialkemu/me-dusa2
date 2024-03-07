import React from 'react';
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import whatsapp from "../assets/images/whatsapp.png"
const Footer = () => {
  return (
    <div className="bg-info row flex" style={{height:"29rem"}}>
      <div className="container m-3">
        <form action="post" style={{width:"50rem"}} className=''> 
        <h4>Talk to us! Add your suggentions</h4>
          <div className='row m-2 '>
              <div class="form-floating col-6 ">
              <input type="" className="form-control" id="" placeholder=""/>
              <label for="">First Name</label>
              </div>
              <div className="form-floating col-6">
              <input type="" className="form-control" id="" placeholder=""/>
              <label for="">Last Name</label>
              </div>
          </div>
        <div class="form-floating m-3">
          <input type="email" class="form-control" id="femail" placeholder="name@example.com"/>
            <label for="femail">Email address</label>
            </div>
            <div className="form-floating m-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="Comment" ></textarea>
              <label for="floatingTextarea">Comments</label>
              </div>
        </form>
      </div>

      <div className=''>
        <p  className='' >&copy; serialkemu. All rights reserved.</p>
      </div> 
    <div className='p-4 row '>
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
