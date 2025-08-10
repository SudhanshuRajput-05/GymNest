import React from 'react'
import mem1 from '../assets/mem1.webp';
import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4500';
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

const Membership = () => {
  const [formData, setFormData] = useState({
    amount: 100,
    city: '',
    email: '',
    user: 'guest' // Adding default user value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const handlePayment = async () => {
        try {
            if (!formData.city || !formData.email) {
                alert("Please fill in all required fields");
                return;
            }

            // First check if Razorpay is loaded
            if (!window.Razorpay) {
                throw new Error("Razorpay SDK is not loaded");
            }

            console.log('Sending request with data:', formData);
            const response = await axios.post(`${API_URL}/api/membership/buy-membership`, formData);
            console.log('Server response:', response);
            
            if (!response.data) {
                throw new Error('No data received from server');
            }
            
            const { orderId, amount, membershipId } = response.data;
            
            if (!orderId || !amount || !membershipId) {
                throw new Error('Invalid response from server: Missing required fields');
            }

            const options = {
                key: RAZORPAY_KEY, // Using the environment variable
                amount: Number(amount), // ensure amount is a number
                currency: "INR",
                name: "GymNest Membership",
                description: "Membership Payment",
                order_id: orderId,
                handler: async function (response) {
                    try {
                        await axios.post(`${API_URL}/api/membership/verify-membership`, {
                            razorpay_order_id: orderId,
                            razorpay_payment_id: response.razorpay_payment_id,
                            membershipId
                        });
                        alert("Payment Successful!");
                    } catch (verifyError) {
                        console.error("Payment verification failed:", verifyError);
                        alert("Payment verification failed. Please contact support.");
                    }
                },
                prefill: {
                    name: "User",
                    email: formData.email,
                    contact: ""
                },
                theme: { color: "#3399cc" },
                modal: {
                    ondismiss: function() {
                        alert("Payment cancelled by user");
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Payment Error:", error);
            if (error.response) {
                // The server responded with a status code outside the 2xx range
                console.error("Server Error Data:", error.response.data);
                console.error("Server Error Status:", error.response.status);
                alert("Payment initialization failed: " + (error.response.data.message || error.response.data.error || "Server error"));
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received:", error.request);
                alert("Payment initialization failed: No response from server. Please check if the server is running.");
            } else {
                // Something happened in setting up the request
                console.error("Error setting up request:", error.message);
                alert("Payment initialization failed: " + error.message);
            }
        }
    };

  return<>
        <div
        style={{
                backgroundImage: `linear-gradient(rgba(43, 43, 44, 0.85), rgba(49, 48, 49, 0.85)),  url(${mem1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '3rem 0 2rem 0',
                width: '100%',
                height:'500px',
                marginTop: '2rem',
                textAlign:'center',
            }}>
              <h1 className='container text-warning mt-5'
              style={{
                
              }}
              >
                Book Your Membership Now & Start Your Journey
              </h1 >
              <h5 className='container text-warning mt-3'
              >
                Fill out the form to Book Your Membership
              </h5>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 bg-white bg-opacity-95">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-5 fw-bold text-secondary">
                                    Premium Membership
                                </h2>
                                
                                <div className="text-center mb-4">
                                    <div className="badge bg-warning text-dark px-4 py-2 mb-3 rounded-pill">BEST VALUE</div>
                                    <h3 className="text-primary fw-bold">₹{formData.amount}</h3>
                                    <p className="text-muted">Monthly Membership</p>
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        <span>Access to all equipment</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        <span>Personal trainer consultation</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        <span>Group classes included</span>
                                    </div>
                                </div>

                                <form className="mt-4">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="number" 
                                            className="form-control"
                                            id="amount"
                                            name="amount"
                                            value={formData.amount} 
                                            onChange={handleInputChange}
                                            placeholder="Amount"
                                        />
                                        <label htmlFor="amount">Amount (INR)</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={formData.city} 
                                            onChange={handleInputChange}
                                            required
                                            placeholder="City"
                                        />
                                        <label htmlFor="city">City</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input 
                                            type="email" 
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email} 
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Email"
                                        />
                                        <label htmlFor="email">Email address</label>
                                    </div>

                                    <button 
                                        type="button"
                                        className="btn btn-primary w-100 py-3 rounded-3 fs-5 fw-500 shadow-sm hover-shadow transition"
                                        onClick={handlePayment}
                                    >
                                        <i className="fas fa-lock me-2"></i>
                                        Secure Payment
                                    </button>

                                    <div className="text-center mt-4">
                                        <div className="d-flex justify-content-center gap-3">
                                            <i className="fab fa-cc-visa fs-2 text-muted opacity-75 transition hover-opacity-100"></i>
                                            <i className="fab fa-cc-mastercard fs-2 text-muted opacity-75 transition hover-opacity-100"></i>
                                            <i className="fab fa-cc-amex fs-2 text-muted opacity-75 transition hover-opacity-100"></i>
                                        </div>
                                        <small className="text-muted mt-3 d-block fw-light">
                                            Secure payment powered by Razorpay
                                        </small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default Membership;