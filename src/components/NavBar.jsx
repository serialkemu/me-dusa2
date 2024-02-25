import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container-fluid" ref={navRef}>
            <a className="navbar-brand" href="#"><Link to='/' className='link-dark fw-bold text-decoration-none'>Usikimye</Link></a>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "7rem" }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/"><Link className='link-dark fw-bold text-decoration-none' to="/">Home</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Report"><Link className='link-dark fw-bold text-decoration-none' to="/report">Report</Link></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" onClick={toggleMenu}>
                    Resources
                  </a>
                  <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} >
                    <li><a className="dropdown-item" href="/Education"><Link className='link-dark fw-bold text-decoration-none' to="/education">Education</Link></a></li>
                    <li><a className="dropdown-item" href="/Counselling"><Link className='link-dark fw-bold text-decoration-none' to="/counselling">Counselling</Link></a></li>
                    <li><a className="dropdown-item" href="/Statistics"><Link className='link-dark fw-bold text-decoration-none' to="/statistics">Statistics</Link></a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><Link to="/help" className='link-dark fw-bold text-decoration-none'>Help</Link></a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;
