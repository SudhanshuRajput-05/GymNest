import React from 'react';
import personal1 from '../assets/personal1.jpg';

const Personal = () => {
  return <>
    <div style={{
      backgroundImage: `linear-gradient(rgba(60, 58, 62, 0.85), rgba(71, 68, 72, 0.85)), url(${personal1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '3rem 0 2rem 0',
      width: '100%',
      height: '400px',
      marginTop: '2rem',
      textAlign: 'center',
      letterSpacing: '3px'
    }}>
      <div className="pt-5">
        <strong className="d-block text-warning display-4 fw-bold mb-2">
          PERSONAL TRAINING
        </strong>
      </div>
    </div>

    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="text-center mb-4 fw-bold text-uppercase position-relative" style={{
            backgroundImage: 'linear-gradient(45deg, #ff4b1f, #1fddff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
            fontSize: '2.5rem'
          }}>
            Personal Training Program
          </h1>
          
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-dumbbell text-primary mb-3 fs-2"></i>
                  <h4 className="fw-bold mb-3">Fitness Management</h4>
                  <p className="text-muted mb-0">Comprehensive training in modern fitness facility management and operations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-user-friends text-primary mb-3 fs-2"></i>
                  <h4 className="fw-bold mb-3">Personal Training</h4>
                  <p className="text-muted mb-0">Expert guidance in one-on-one fitness training and client management.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-bicycle text-primary mb-3 fs-2"></i>
                  <h4 className="fw-bold mb-3">Spinning Instruction</h4>
                  <p className="text-muted mb-0">Specialized training in group cycling and spinning class instruction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light p-4 p-lg-5 rounded-3 mb-5">
            <p className="text-secondary lh-lg fs-5 mb-0">
              The Gold's Gym Fitness Institute (GGFI) is India's first International Fitness Management Institute that offers comprehensive Fitness Training Programs. Our 3-month courses are monitored by qualified personnel of Gold's Gym and feature guest lectures from international fitness industry leaders. We offer guaranteed internships and firsthand experience in world-class fitness training. GGFI provides the most exciting and up-to-date education pathway to gain industry-leading qualifications and ongoing training in all aspects of the fitness industry.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="position-relative mb-5">
            <h2 className="text-center mb-5 fw-bold" style={{
              color: '#ff4b1f',
              letterSpacing: '1px'
            }}>
              CAREER BENEFITS
              <div className="position-absolute start-50 translate-middle-x" style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(45deg, #ff4b1f, #1fddff)',
                bottom: '-10px'
              }}></div>
            </h2>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-money-bill-wave fs-4 text-primary me-3"></i>
                      <h5 className="fw-bold mb-0">Competitive Earnings</h5>
                    </div>
                    <p className="text-secondary mb-0">
                      Earn between ₹8,000 – ₹50,000 depending on your expertise and client base.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-clock fs-4 text-primary me-3"></i>
                      <h5 className="fw-bold mb-0">Flexible Work Options</h5>
                    </div>
                    <p className="text-secondary mb-0">
                      Work in a gym or freelance as a personal trainer offering home services to clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-dumbbell fs-4 text-primary me-3"></i>
                      <h5 className="fw-bold mb-0">Gym Partnership Benefits</h5>
                    </div>
                    <p className="text-secondary mb-0">
                      Access to hundreds of potential clients, top-range equipment, and professional advertising support when working with established gyms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-home fs-4 text-primary me-3"></i>
                      <h5 className="fw-bold mb-0">Independent Practice</h5>
                    </div>
                    <p className="text-secondary mb-0">
                      Freedom to work across locations, offer convenient home training, and set your own schedule.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card border-0 bg-primary text-white shadow">
                  <div className="card-body p-4 text-center">
                    <i className="fas fa-heart fs-1 mb-3"></i>
                    <h4 className="fw-bold mb-3">Job Satisfaction</h4>
                    <p className="mb-0 fs-5">
                      Make a positive impact on people's lives by helping them increase strength, improve appearance, and become healthier. Experience the reward of transforming lives through fitness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Personal;
