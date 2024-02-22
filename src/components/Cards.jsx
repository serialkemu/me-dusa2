import React from 'react';

const Cards = () => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;
