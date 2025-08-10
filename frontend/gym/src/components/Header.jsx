import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo1 from '../assets/logo1.jpg'
const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const hl = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  };
  return <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
   <div className='navbar-brand d-flex align-items-center' style={{
     padding: '1rem',
     marginRight: '1rem',
     transition: 'transform 0.3s ease'
   }}
   onMouseEnter={e => {
     e.currentTarget.style.transform = 'scale(1.05)';
   }}
   onMouseLeave={e => {
     e.currentTarget.style.transform = 'scale(1)';
   }}>
     <img 
       src={logo1} 
       alt="GymNest Logo" 
       style={{
         height: '60px',
         width: '60px',
         borderRadius: '50%',
         border: '2px solid #fff',
         boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
         objectFit: 'cover'
       }}
     />
   </div>
  <button class="navbar-toggler bg-secondry" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {
          token && (
            <>
            <li class="nav-item active">
        <Link class="nav-link text-light" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-light" to="/dashboard">Dashboard</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-light" to="/about">About</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Programs
        </a>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/membership">Membership</Link>
          <Link class="dropdown-item" to="/personal-training">Personal Training</Link>
          <Link class="dropdown-item" to="/group-training">Group Training</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/trainers">Trainers</Link>
        </div>
      </li>
      <li class="nav-item ">
        <Link class="nav-link text-light" to="/contact">Contact</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link text-light" to="/products">Products</Link>
      </li>
      <form class="form-inline my-lg-0 d-flex align-items-center">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary my-2 my-sm-0 text-light bg-danger" type="submit">Search</button>
      </form>
      {!token && (
        <div className="d-flex align-items-center gap-3 ms-3">
          <Link
            to="/"
            className="text-decoration-none"
          >
            <button className="btn btn-outline-light d-flex align-items-center gap-2 btn-sm" 
              style={{
                borderRadius: '20px',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(255,255,255,0.1)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(255,255,255,0.1)';
              }}
            >
              <i className="fas fa-user-plus"></i>
              Register
            </button>
          </Link>
          <Link 
            to="/login" 
            className="text-decoration-none"
          >
            <button className="btn btn-primary d-flex align-items-center gap-2 btn-sm" 
              style={{
                borderRadius: '20px',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,123,255,0.3)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,123,255,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,123,255,0.3)';
              }}
            >
              <i className="fas fa-sign-in-alt"></i>
              Login
            </button>
          </Link>
        </div>
      )}
      <li className='nav-item ms-2'>
                <button 
                  onClick={hl}
                  className="btn btn-danger d-flex align-items-center gap-2 btn-sm"
                  style={{
                    borderRadius: '20px',
                    padding: '8px 16px',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    boxShadow: '0 2px 4px rgba(220,53,69,0.3)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(220,53,69,0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(220,53,69,0.3)';
                  }}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
                </li>
            </>
          )
        }
        
    </ul>
  </div>
</nav>

</>
}

export default Header