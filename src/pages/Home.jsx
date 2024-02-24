import React from 'react';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import classroom from '../assets/images/classroom.png'
import data from '../assets/images/data.png';
import survivors from '../assets/images/survivors.png'
import ethics from '../assets/images/ethics.png'
import Information from '../components/Information';

const Home = () => {
  return (
    <div className='womenz'>
        <div className='mb-3'>
        <Carousel/>
        </div>
<<<<<<< HEAD
        <div  className='mb-3 row bg-info'>
          <div className='col-4'><h2>MUT SGBV Hotline Free of Charge Confidnetial.24/7. </h2> </div> 
=======
        <div  className='mb-3 row bg-warning rounded-end p-3'>
          <div className='col-4'><h2>MUT SGBV Hotline Free Confidnetial.24/7. </h2> </div> 
>>>>>>> 4d675b7 (	new file:   src/components/Edu.jsx)
          <div className='col-4 text-center mt-5'>
            <button className='btn btn-secondary'>Call <a href='0800724635' className='text-dark'>0800724635</a> toll free</button>
            </div> 
            <div className='col-4 text-center mt-5'> 
              <button className='btn btn-secondary '>Get Help</button>
              </div>    
        </div>
        <div  className='mb-3 row '>
        <div className="row g-0  position-relative col-6 p-3 border">
          <div className="col-md-6 mb-md-0 p-md-4 ">
            <img src={classroom} className="w-100" alt="..."/>
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">Educate yourself</h5>
              <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
              <a href="#" className="stretched-link">Go somewhere</a>
              </div>
              </div>
        <div className="row g-0  position-relative col-6 p-3 border">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src={data} className="w-100" alt="..."/>
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">Statistics</h5>
              <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
              <a href="#" className="stretched-link">Go somewhere</a>
              </div>
            
        </div>
        <div className="row g-0  position-relative col-6 p-3 border">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src={survivors} className="w-100" alt="..."/>
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">Survivor stories</h5>
              <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
              <a href="#" className="stretched-link">Go somewhere</a>
              </div>
              </div>
        
        
        <div className="row g-0 position-relative col-6 p-3 border">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src={ethics} className="w-100" alt="..."/>
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">National and school rules</h5>
              <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
              <a href="#" className="stretched-link">Go somewhere</a>
              </div>
              </div>
              <Information/>
        </div>

       
    </div>
  )
}

export default Home