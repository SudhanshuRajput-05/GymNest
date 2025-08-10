import React from 'react'
import Slider from './Slider';
import { useInView } from 'react-intersection-observer'
import imagedata from '../data/image';
import img10 from '../assets/img10.jpg';
import img12 from '../assets/img12.jpg';
import img15 from '../assets/img15.avif';
import img17 from '../assets/img17.jpg';
import img16 from '../assets/img16.jpg';
import img18 from '../assets/img18.jpg';
import img19 from '../assets/img19.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 })
  const [ref2, inView2] = useInView({ threshold: 0.2 })
  const [ref3, inView3] = useInView({ threshold: 0.2 })

return<>
<style>
{`
      .fade-in-membership {
        animation: fadeInMembership 1s ease;
      }
      @keyframes fadeInMembership {
        from { opacity: 0; transform: translateY(40px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .slide-in-left {
        opacity: 0;
        transform: translateX(-80px);
        transition: all 0.8s cubic-bezier(.4,0,.2,1);
      }
      .slide-in-right {
        opacity: 0;
        transform: translateX(80px);
        transition: all 0.8s cubic-bezier(.4,0,.2,1);
      }
      .slide-in-left.in-view,
      .slide-in-right.in-view {
        opacity: 1;
        transform: translateX(0);
      }
    `}
    </style>
<div style={
  {
    textAlign:'center',
    color:'darkblue',
    fontFamily:'monospace'
    
  }
}>
  <h1>WELCOME TO OUR GYMNEST</h1>
</div>
  <div className='container-fluid'>
    <Slider img={imagedata}/>
    </div>
        <div  className='section p-5 mt-3 d-flex align-items-center gap-5'>
        <img 
        src={img10}
        alt="data"
        style={{
          width: '400px', 
          height: '400px', 
          objectFit: 'cover',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}
      />
      <div className="flex-grow-1" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem',
          fontWeight: 'bold',
          textAlign:'center'
        }}>Our Legacy</h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          color: '#444',
          marginBottom: '1.5rem'
        }}>
          GymNest is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 2025 in Bihar, UP.
        </p>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#444',
          marginBottom: '1.5rem'
        }}>
          GymNest has become synonymous with fitness excellence and innovation. GymNest India carries the legacy ahead in the home country since its inception in July.
        </p>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#444',
          marginBottom: '1.5rem'
        }}>
          World-class fitness facilities and a comprehensive range of workout programs tailored to meet the needs of diverse fitness enthusiasts is what sets us apart from others.
        </p>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#444'
        }}>
          GymNest India, a part of this esteemed legacy, has expanded its presence across various cities, aiming to empower individuals to achieve their fitness goals, regardless of their fitness levels or aspirations. It's a fitness haven that combines state-of-the-art equipment, expert trainers, and a supportive community to foster a holistic approach to wellness.
        </p>
      </div>
    </div>
    <div style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3)), url(${img12})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        marginTop: '3rem',
        backgroundAttachment:'fixed'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: 'black',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: 'bold'
        }}>Our Services</h1>

        <div className="d-flex justify-content-around">
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '2rem',
            borderRadius: '15px',
            width: '45%',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            transform: 'scale(1)',
            ':hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}>
            <h2 style={{
              fontSize: '2rem',
              color: '#333',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}>GYMS</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <Link to="/membership" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  ':hover': { color: '#007bff', transform: 'translateX(10px)' },
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  🏋️‍♂️ Memberships
                </li>
              </Link>
              <Link to="/personal-training" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  💪 Personal Training Sessions
                </li>
              </Link>
              <Link to="/group-training" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  🧘‍♀️ Group Fitness Classes
                </li>
              </Link>
              <Link to="/modern-facilities" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  🚿 Modern Facilities
                </li>
              </Link>
            </ul>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '2rem',
            borderRadius: '15px',
            width: '45%',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            transform: 'scale(1)',
            ':hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            }
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}>
            <h2 style={{
              fontSize: '2rem',
              color: '#333',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}>PRODUCTS</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  💪 Protein Supplements
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  👕 Fitness Apparel
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  ⚡ Pre-workout Supplements
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  🏃‍♂️ Training Equipment
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <li style={{ 
                  margin: '1rem 0', 
                  fontSize: '1.1rem', 
                  color: '#444',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#007bff';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#444';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  🥤 Nutrition Products
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)), url(${img15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        marginTop: '1rem',
        height:'300px',
        textAlign:'center'
      }}>
      <strong style={{
        color:'yellow',
        textAlign:'center',
        fontFamily:'bold',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        fontSize:'40px',
        padding:'15px'
      }}>
        BOOK YOUR MEMBERSHIP
      </strong>
      <br />
      <Link to="/membership">
        <button style={{
          marginTop: '2rem',
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: '#949481ff',
          color: 'yellow',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.backgroundColor = '#d12e5cff';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#73787aff';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        }}>
          Join Now
        </button>
      </Link>
      </div>

    <div className="d-flex justify-content-center align-items-center mt-4" style={{ gap: '96px' }}>
      <img src={img10} alt="img2" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffc107' }} />
      <img src={img15} alt="img3" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffc107' }} />
      <img src={img16} alt="img4" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffc107' }} />
    </div>

    <div className="container-fluid text-white py-5 mt-5"
    style={{
      backgroundImage: `linear-gradient(rgba(39, 30, 164, 0.7), rgba(50, 39, 112, 0.7)), url(${img17})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '700px',
      width: '100%'
    }}
    >
    <div className="text-center mb-5">
      <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
        Pre <span className="text-warning">Sale</span>
      </h2>
      <div className="row justify-content-center mt-4 g-4">
        <div className="col-12 col-md-3">
          <div className="card bg-dark bg-opacity-50 border-light rounded-4">
            <div className="card-body text-center">
              <h4 className="card-title fw-bold text-white">GymNest Purnea</h4>
              <button className="btn btn-warning fw-bold px-4 mt-3">View</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card bg-dark bg-opacity-50 border-light rounded-4">
            <div className="card-body text-center">
              <h4 className="card-title fw-bold text-white">GymNest Muzzafarpur</h4>
              <button className="btn btn-warning fw-bold px-4 mt-3">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 className="text-warning fw-bold text-center my-5" style={{ fontSize: '2.5rem' }}>GYMS COMING SOON</h2>
    <div className="row justify-content-center align-items-start gx-5 gy-4">
      <div className="col-12 col-md-4">
        <div className="container">
          <h4 className="fw-bold text-white mb-4">GYMS COMING SOON :</h4>
          <ul className="list-unstyled text-warning fw-bold fs-5">
            <li>🏋 GymNest Fitness Club City Ranchi</li>
            <li>🏋 GymNest Fitness Club Punjab</li>
            <li>🏋 GymNest Fitness Club Uttar Pradesh</li>
            <li>🏋 GymNest Fitness Club Uttar Pradesh</li>
            <li>🏋 GymNest Fitness Club Pune</li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-5 d-flex justify-content-center position-relative">
        <div className="position-relative" style={{ width: '350px', height: '200px' }}>
          <img
            src={img16}
            alt="Coming Soon"
            className="img-fluid rounded-4 border border-warning shadow"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'yellow',
            fontWeight: 'bold',
            fontSize: '2rem',
            textShadow: '2px 2px 8px black',
          }}>COMING SOON</div>
        </div>
      </div>
    </div>
  </div>

  <div className="d-flex justify-content-center w-100 my-5" style={{ opacity: 0.9 }}>
    <div
      style={{
        padding: '1rem 0',
        maxWidth: '70%',
        width: '100%',
      }}
    >
      <h1
        className="fw-bold text-center mb-4"
        style={{
          letterSpacing: '2px',
          fontSize: '3rem',
          color: 'black',
          opacity: 0.9,
          textShadow: '2px 0 4px #888'
        }}
      >
        Our Programs
      </h1>
      <p className="text-start" style={{ fontSize: '1rem', lineHeight: '1.5', color: 'black', opacity: 0.9 }}>
        The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.
      </p>
      <div>
        {/* Corporate Membership Section */}
        <div
          ref={ref1}
          className={`row align-items-center ${inView1 ? 'in-view' : ''} slide-in-left`}
          style={{ marginTop: '2rem' }}
        >
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={img15}
              alt="Corporate Membership"
              style={{
                width: '100%',
                maxWidth: '550px',
                height: '350px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ paddingLeft: '24px' }}>
              <h3 className="fw-bold mb-2" style={{ color: '#212529', fontSize: '1.5rem', textAlign: 'left' }}>Corporate Membership</h3>
              <p style={{ fontSize: '1rem', color: '#333', marginBottom: 0, textAlign: 'left', lineHeight: '1.7' }}>
                Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
        {/* 2bd Membership Section */}
        <div
          ref={ref2}
          className={`row align-items-center ${inView2 ? 'in-view' : ''} slide-in-right`}
          style={{ marginTop: '2rem' }}
        >
          <div className="col-12 col-md-6">
            <div style={{ paddingLeft: '24px' }}>
              <h3 className="fw-bold mb-2" style={{ color: '#212529', fontSize: '1.5rem', textAlign: 'left' }}>Corporate Membership</h3>
              <p style={{ fontSize: '1rem', color: '#333', marginBottom: 0, textAlign: 'left', lineHeight: '1.7' }}>
                Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={img15}
              alt="Corporate Membership"
              style={{
                width: '100%',
                maxWidth: '550px',
                height: '350px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
         {/* 3rdd Membership Section */}
        <div
          ref={ref3}
          className={`row align-items-center ${inView3 ? 'in-view' : ''} slide-in-left`}
          style={{ marginTop: '2rem' }}
        >
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={img15}
              alt="Corporate Membership"
              style={{
                width: '100%',
                maxWidth: '550px',
                height: '350px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ paddingLeft: '24px' }}>
              <h3 className="fw-bold mb-2" style={{ color: '#212529', fontSize: '1.5rem', textAlign: 'left' }}>Corporate Membership</h3>
              <p style={{ fontSize: '1rem', color: '#333', marginBottom: 0, textAlign: 'left', lineHeight: '1.7' }}>
                Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(10, 32, 70, 0.85), rgba(10, 32, 70, 0.85)), url(${img17})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '3rem 0 2rem 0',
        width: '100%',
        marginTop: '2rem'
      }}
    >
      <div className="container">
        <div className="text-center mb-4">
          <h1 style={{ color: '#ffd600', fontWeight: 700, fontSize: '2.5rem' }}>
            Gold's Gym <span style={{ color: '#fff700' }}>Fitness Institute</span>
          </h1>
          <h4 style={{ color: '#fff', fontWeight: 500, marginTop: '1rem' }}>
            Become a Certified Fitness Professional Today
          </h4>
          <p style={{ color: '#fff', fontWeight: 400, fontSize: '1.1rem', marginTop: '0.5rem' }}>
            Physical Activity Or Can Improve Your Health
          </p>
        </div>
        <div className="row justify-content-center mb-4 flex-nowrap" style={{ gap: '0.5rem', overflowX: 'auto' }}>
          {/* Card 1 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center" style={{ minWidth: '220px', flex: '0 0 220px' }}>
            <div style={{
              width: '100%',
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              position: 'relative',
              height: '180px'
            }}>
              <img src={img12} alt="GGFI online" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{
                background: '#ffd600',
                fontWeight: 700,
                padding: '0.5rem',
                fontSize: '1rem',
                textAlign: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0
              }}>
                ONLINE PERSONAL TRAINING COURSE
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center" style={{ minWidth: '220px', flex: '0 0 220px' }}>
            <div style={{
              width: '100%',
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              position: 'relative',
              height: '180px'
            }}>
              <img src={img12} alt="GGFI offline" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{
                background: '#ffd600',
                fontWeight: 700,
                padding: '0.5rem',
                fontSize: '1rem',
                textAlign: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0
              }}>
                OFFLINE PERSONAL TRAINING COURSE
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center" style={{ minWidth: '220px', flex: '0 0 220px' }}>
            <div style={{
              width: '100%',
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              position: 'relative',
              height: '180px'
            }}>
              <img src={img16} alt="ACE" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{
                background: '#ffd600',
                fontWeight: 700,
                padding: '0.5rem',
                fontSize: '1rem',
                textAlign: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0
              }}>
                ACE CERTIFICATION
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center" style={{ minWidth: '220px', flex: '0 0 220px' }}>
            <div style={{
              width: '100%',
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              position: 'relative',
              height: '180px'
            }}>
              <img src={img15} alt="Short Courses" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{
                background: '#ffd600',
                fontWeight: 700,
                padding: '0.5rem',
                fontSize: '1rem',
                textAlign: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0
              }}>
                SHORT COURSES
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to='/about'>
          <button
            style={{
              background: '#ffd600',
              color: '#212529',
              fontWeight: 700,
              border: 'none',
              borderRadius: '6px',
              padding: '0.7rem 2.5rem',
              fontSize: '1.2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer'
            }}
          >
            Know More
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div
  style={{
        backgroundImage: `url(${img18})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '3rem 0 2rem 0',
        width: '100%',
        height:'350px',
        marginTop: '2rem'
  }}
  >
    <div className='container'
    style={{
      backgroundColor:'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      width:'40%',
      height:'70%',
      marginTop:'0.5rem',
      textAlign:'center',
      alignContent:'center',
      lineHeight:'1.6rem'
    }}
    >
      <p style={{
        marginTop:'8px',
        fontFamily:'-moz-initial'
      }}>It's a very nice gym with world top class equipment of Life fitness and Hammer Strength, and people surrounding is also good, and staff of this branch is very kind, they help members very well and all the trainers are certified with good knowledge of teaching as well. Good place to achieve your goals.</p>
      <p style={{
        fontFamily:'inherit',
        color:'rgb(146,34,56)'
      }}>Best  Wishes</p>
    </div>
  </div>
  <div className='d-flex justify-content-around'
    style={{
        backgroundImage:  `linear-gradient(rgba(42, 42, 43, 0.85), rgba(57, 58, 59, 0.85)), url(${img19})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '3rem 0 2rem 0',
        width: '100%',
        height:'700px',
        marginTop: '2rem'
    }}>
      <div style={{
        color:'yellow',
        marginTop:'3rem',
        fontFamily:'revert-layer',
        height:'300px'
        }}>
        <h4>QUICK LINK</h4>
        <div className='container mt-5 fs-5'>
          <Link to="/home" style={{
            textDecoration:'none',
            color:'white',
          }}>Home</Link>
          <br />
          <Link to="/about" style={{
            textDecoration:'none',
            color:'white',
            
          }}>About Us</Link>
          <br />
          <Link to="/membership" style={{
            textDecoration:'none',
            color:'white',
          }}>Memberships</Link>
          <br />
          <Link to="/personal-training" style={{
            textDecoration:'none',
            color:'white',
          }}>Personal Training</Link>
          <br />
          <Link to="/group-training" style={{
            textDecoration:'none',
            color:'white',
          }}>Group Training</Link>
          <br />
          <Link to="/modern-facilities" style={{
            textDecoration:'none',
            color:'white',
          }}>Modern Facilities</Link>
        </div>
      </div>
      <div style={{
        color:'yellow',
        marginTop:'3rem',
        fontFamily:'revert-layer',
        height:'300px'
        }}>
        <h4>PRODUCTS</h4>
        <div className='container mt-5 fs-5'>
          <Link to="/products" style={{
            textDecoration:'none',
            color:'white',
          }}>Run Machine</Link>
          <br />
          <Link to="/about" style={{
            textDecoration:'none',
            color:'white',
            
          }}>About Us</Link>
          <br />
          <Link to="/membership" style={{
            textDecoration:'none',
            color:'white',
          }}>Memberships</Link>
          <br />
          <Link to="/personal-training" style={{
            textDecoration:'none',
            color:'white',
          }}>Personal Training</Link>
          <br />
          <Link to="/group-training" style={{
            textDecoration:'none',
            color:'white',
          }}>Group Training</Link>
          <br />
          <Link to="/modern-facilities" style={{
            textDecoration:'none',
            color:'white',
          }}>Modern Facilities</Link>
        </div>
      </div>
      <div style={{
        color:'yellow',
        marginTop:'3rem',
        fontFamily:'revert-layer',
        height:'300px'
        }}>
        <h4>CONTACTS</h4>
        <div className='container mt-5 fs-5'>
          <Link to="/" style={{
            textDecoration:'none',
            color:'white',
          }}>Home</Link>
          <br />
          <Link to="/about" style={{
            textDecoration:'none',
            color:'white',
            
          }}>About Us</Link>
          <br />
          <Link to="/membership" style={{
            textDecoration:'none',
            color:'white',
          }}>Memberships</Link>
          <br />
          <Link to="/personal-training" style={{
            textDecoration:'none',
            color:'white',
          }}>Personal Training</Link>
          <br />
          <Link to="/group-training" style={{
            textDecoration:'none',
            color:'white',
          }}>Group Training</Link>
          <br />
          <Link to="/modern-facilities" style={{
            textDecoration:'none',
            color:'white',
          }}>Modern Facilities</Link>
        </div>
      </div>
  </div>
  </>
};

export default Home;
