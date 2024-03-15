import React from 'react';
import { Link } from 'react-router-dom';
import Education from './Education'
import Help from './Help' 
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import  book from '../assets/images/book.gif'
import stats from '../assets/images/stats.gif'
import law from '../assets/images/law.gif'
import  survivor from  '../assets/images/survivor.gif'
import Information from '../components/Information';
import '../styles/home.css';
import donation from '../assets/images/donation.gif'
import volunteering from '../assets/images/volunteering.gif'
import callService from '../assets/images/callService.gif'
import policy from '../assets/images/policy.gif'

const HomeMid = ({iconMid, titleMid,desMid,refMid}) => {
  return(
      <div className=" gap-1  position-relative col-6 p-3 border">
          <div className="col-md-6 mb-md-0 p-md-4 ">
            <img src={iconMid} className="w-100" alt="..."/>
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">{titleMid}</h5>
              <div>
              <p>{desMid}.</p>
              </div>
              <Link to={refMid} className="btn btn-secondary  stretched-link">Go somewhere</Link>
              </div>
              </div>
  )
}


const HomeBot = ({botImg,botRef,botTitle})=>{
  return (
    <div>
      <Link to={botRef}>
      <img src={botImg} alt='Donate' style={{height:'6rem'}}/>
      </Link>
      <h5>{botTitle}</h5>
      
    </div>
  )
}


const Home = () => {
  return (
    <div className='' >
        <Carousel className=""/>
        <div  className='m-2  row rounded-end p-5 bg-info border rounded'> 
          <div className='col-4'><h2>MUT SGBV Hotline<br></br>24/7  Free</h2> </div> 
          <div className='col-4 text-center mt-5'>
            <button className='btn btn-secondary p-4 '><p className="h4">call <Link href='0800724635' className='text-dark'>0800724635</Link> </p>toll free</button>
            </div> 
            <div className='col-4 text-center mt-5 '> 
              <button className='btn btn-secondary p-4'><p className='h4'><Link to="/report" className='text-dark'>Get Help</Link></p> </button>
              </div>    
        </div>
        <div className='d-flex justify-content-center'>
        <div  className='m-2 row p-5' style={{width:'100rem'}}>
        <HomeMid iconMid={book} titleMid={'Education'} desMid={'lorem'} refMid='/Education' />
        <HomeMid iconMid={stats} titleMid={'statistics'} desMid={''} refMid='/statistics'/>
        <HomeMid iconMid={law} titleMid={'Advocacy'} desMid={''}/>
        <HomeMid iconMid={survivor} titleMid={'Survivor Stories'} desMid={''}/>
        </div>
        </div>

        <div class="position-relative  bg-info " id='test'>
        <div className='text-center mt-5 row bg-primary'>
        <div className="card text-dark">
            <div className="card-img-overlay">
              <h5 className="card-title">Any help is appreciated!</h5>
              <p className="card-text">You can  donate to support our work.</p>
              <div className='d-flex justify-content-center gap-4'>
                <HomeBot botImg={donation}  botTitle='Donate'/>
                <HomeBot botImg={volunteering} botTitle='Testimonials'/>
                <HomeBot botImg={callService} botTitle='Volunteer'/>
                <HomeBot botImg={policy} botTitle='Policies'/>
              </div>
              <div>
                <Link className='btn btn-secondary' to={'./Help'}>Learn More</Link>
              </div>
              </div> 
              </div>
        </div>
        </div>

        <div className="m-2 p-5 row">
        <Information />
        </div>

       
    </div>
    
  )
}

export default Home