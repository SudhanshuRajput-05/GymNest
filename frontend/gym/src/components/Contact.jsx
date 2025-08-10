import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import contactimg1 from '../assets/contactimg1.jpg'
import axios from 'axios'

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/api/contact/create', formData);
      if (response.data.success) {
        alert('Message sent successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };
  return <>
  <div
  style={{
          backgroundImage: `linear-gradient(rgba(60, 58, 62, 0.85), rgba(71, 68, 72, 0.85)),  url(${contactimg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '3rem 0 2rem 0',
          width: '100%',
          height:'400px',
          marginTop: '2rem',
          textAlign:'center',
          
      }}>
        <h2 className='container text-warning mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>
        <br />CONTACT WITH GYMNEST </h2>
        <h5 className='container text-light mt-3'>WE'D LOVE TO HEAR FROM YOU</h5>
  </div>
  <div className='container justify-content-center mt-5 p-5'
  style={{
        padding: '1rem 0',
        maxWidth: '70%',
        width: '100%',
  }}
  >
    <div>
      <h2
        className="fw-bold text-center mb-4"
        style={{
          letterSpacing: '2px',
          fontSize: '3rem',
          color: 'black',
          opacity: 0.9,
          textShadow: '2px 0 4px #888'
        }}>
        GET IN TOUCH
      </h2>
    </div>
    <div style={{
          letterSpacing: '2px',
          fontSize: '1rem',
          
        }}>
      <p className='text-start'>We are always ready to hear from you our team is always ready to hear from you. We make it a point to respond within 24 hours on weekdays and 48 hours on weekends.</p>
      <p className='text-start'>If you have any question or would like to get in touch with us, please don't hesitate to reach out you can contact us via email [<a href=''>sudhanshurajput35246@gmail.com</a>] by phone [7033367399].</p>
      <p>Alternatively, you can fill out the form below and we'll get back to you as soon as possible </p>
    </div>
  </div>
  <div className='container mb-5'>
    <div className='row justify-content-center'>
      <div className='col-lg-8'>
        <div className='card shadow-lg border-0'>
          <div className='card-body p-5'>
            <form onSubmit={handleSubmit}>
              <div className='row g-4'>
                {/* Name Field */}
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='form-label fw-semibold'>
                      <i className='fas fa-user text-primary me-2'></i>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className='form-control form-control-lg bg-light' 
                      placeholder='Enter your name'
                      required 
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='form-label fw-semibold'>
                      <i className='fas fa-envelope text-primary me-2'></i>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className='form-control form-control-lg bg-light' 
                      placeholder='Enter your email'
                      required 
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='form-label fw-semibold'>
                      <i className='fas fa-phone text-primary me-2'></i>
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className='form-control form-control-lg bg-light' 
                      placeholder='Enter your phone number'
                      required 
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='form-label fw-semibold'>
                      <i className='fas fa-tag text-primary me-2'></i>
                      Subject
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className='form-select form-select-lg bg-light'
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="training">Personal Training</option>
                      <option value="feedback">General Feedback</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div className='col-12'>
                  <div className='form-group'>
                    <label className='form-label fw-semibold'>
                      <i className='fas fa-map-marker-alt text-primary me-2'></i>
                      Address
                    </label>
                    <textarea 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className='form-control bg-light' 
                      rows="2"
                      placeholder='Enter your address'
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Message */}
                <div className='col-12'>
                  <div className='form-group'>
                    <label className='form-label fw-semibold'>
                      <i className='fas fa-comment text-primary me-2'></i>
                      Your Message
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className='form-control bg-light' 
                      rows="4"
                      placeholder='Type your message here...'
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className='col-12'>
                  <button
                    type="submit"
                    className='btn btn-primary btn-lg w-100 fw-bold'
                    style={{
                      background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(78, 84, 200, 0.2)'
                    }}
                  >
                    <i className='fas fa-paper-plane me-2'></i>
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {/* Contact Info Cards */}
            <div className='row mt-5 g-4'>
              <div className='col-md-4'>
                <div className='card border-0 bg-light h-100'>
                  <div className='card-body text-center p-4'>
                    <i className='fas fa-map-marker-alt text-primary mb-3' style={{fontSize: '2rem'}}></i>
                    <h5 className='card-title'>Address</h5>
                    <p className='card-text text-muted'>123 GymNest Street, Fitness City, FC 12345</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card border-0 bg-light h-100'>
                  <div className='card-body text-center p-4'>
                    <i className='fas fa-phone text-primary mb-3' style={{fontSize: '2rem'}}></i>
                    <h5 className='card-title'>Phone</h5>
                    <p className='card-text text-muted'>+91 7033367399</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card border-0 bg-light h-100'>
                  <div className='card-body text-center p-4'>
                    <i className='fas fa-envelope text-primary mb-3' style={{fontSize: '2rem'}}></i>
                    <h5 className='card-title'>Email</h5>
                    <p className='card-text text-muted'>sudhanshurajput35246@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>
}

export default Contact