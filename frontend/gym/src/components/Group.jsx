import React from 'react';
import group1 from '../assets/group1.jpg';
import group2 from '../assets/group2.webp';
import group3 from '../assets/group3.jpg';

const Group = () => {
  return <>
    <div style={{
      backgroundImage: `linear-gradient(rgba(60, 58, 62, 0.85), rgba(71, 68, 72, 0.85)), url(${group1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '3rem 0 2rem 0',
      width: '100%',
      height: '450px',
      marginTop: '2rem',
      textAlign: 'center',
      letterSpacing: '12px'
    }}>
      <div className="pt-5">
        <strong className="d-block text-warning display-4 fw-bold mb-2">
          GYMNEST
        </strong>
      </div>
    </div>

    <div className="container-fluid px-0 position-relative">
      <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${group3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h2 className="display-4 fw-bold mb-4">WHY GOLD'S GYM</h2>
              <div className="mb-4" style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(45deg, #ffd700, #ff4b1f)',
                margin: '0 auto'
              }}></div>
              <p className="lead mb-4 lh-lg">
                Now completing 50 years. We Keep Getting Stronger The India chapter of Gold's Gym started in 2002, 
                when the first Gold's Gym India branch was set up in Mumbai. With over 701+ Facilities across 30 countries. 
                It has cut out for itself 102 gyms in India with another 5 under construction and ready to start in this year.
              </p>
              <p className="lead mb-4 lh-lg">
                With multiple awards for excellence under its belt including 2 awards from the Lions Club for the "Best Fitness Chain", 
                an award from the Images Beauty & Wellness for the Most admired fitness chain of the year", an award from Franchise India, 
                8 awards from Gold's Gym International, making it a very eventful 12 years in the growth of the business.
              </p>
              <p className="lead lh-lg">
                Gold's Gym India has bagged the most prestigious Economic Times ET award for 'Excellence in Marketing 2013' & 
                'Excellence in Customer Service 2014'.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Group