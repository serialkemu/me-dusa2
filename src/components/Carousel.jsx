import React from 'react';
import car6 from '../assets/images/car6.jpg';
import car4 from '../assets/images/car4.jpeg';
import car5 from '../assets/images/car5.png';

 const Caro = ({}) =>{
  return(
    <div>

    </div>
  )
 }




const Carousel = () => {
  return (
    <div className=''>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="9000">
        <div className="carousel-inner pt-2">
          <div className="carousel-item active">
            <img src={car4} className="d-block w-100" alt="stop sgbv" style={{ objectFit: 'cover', width: '100%', height: '31.25rem' }} />
          </div>
          <div className="carousel-item">
            <img src={car6} className="d-block w-100" alt="stop sgbv" style={{ objectFit: 'cover', width: '100%', height: '31.25rem' }} />
          </div>
          <div className="carousel-item">
            <img src={car5} className="d-block w-100" alt="stop sgbv" style={{ objectFit: 'cover', width: '100%', height: '31.25rem' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel;
