import React from 'react';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';


const Home = () => {
  return (
    <div className='womenz'>
        <div className='mb-3'>
        <Carousel/>
        </div>
        <div  className='mb-3 row'>
          <div className='col-4'><h2>MUT SGBV Hotline Free Confidnetial.24/7. </h2> </div> 
          <div className='col-4 text-center mt-5'>
            <button className='btn btn-secondary'>Call <a href='0800724635' className='text-dark'>0800724635</a> toll free</button>
            </div> 
            <div className='col-4 text-center mt-5'> 
              <button className='btn btn-secondary '>Get Help</button>
              </div>    
        </div>
        <div  className='mb-3'>
        <Cards/>
        </div>
       
    </div>
  )
}

export default Home