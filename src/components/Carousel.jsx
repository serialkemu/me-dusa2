import React from 'react';
import car1 from '../assets/images/car1.jpeg';
import car2 from '../assets/images/car2.jpeg';
import car3 from '../assets/images/car3.jpeg';

const Carousel = () => {
  return (
    <div className=''>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="300">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={car2} className="d-block w-100" alt="stop sgbv" style={{ objectFit: 'cover', width: '100%', height: '31.25rem' }} />
          </div>
          <div className="carousel-item">
            <img src={car1} className="d-block w-100" alt="stop sgbv" style={{ objectFit: 'cover', width: '100%', height: '31.25rem' }} />
          </div>
          <div className="carousel-item">
            <img src={car3} className="d-block w-100" alt="stop sgbv" style={{ objectFit: 'cover', width: '100%', height: '31.25rem' }} />
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
