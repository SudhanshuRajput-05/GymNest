import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Fetch user details from token data
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:4500/api/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setUserData({
            name: data.name,
            email: data.email,
            joiningDate: new Date(data.createdAt).toLocaleDateString(),

            age: data.age || '25',
            weight: data.weight || '70',
            height: data.height || '170',
            goal: data.goal || 'General Fitness',
            contactNumber: data.contactNumber || 'Not provided',
            emergencyContact: data.emergencyContact || 'Not provided'
          });
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">
                <i className="fas fa-user-circle me-2"></i>
                Member Information
              </h3>
              {userData ? (
                <div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="text-muted">Name:</h6>
                      <p className="mb-0 fw-bold">{userData.name}</p>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-muted">Email:</h6>
                      <p className="mb-0 fw-bold">{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <h6 className="text-muted">Joining Date:</h6>
                      <p className="mb-0 fw-bold">{userData.joiningDate}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-muted">Contact Number:</h6>
                    <p className="mb-0 fw-bold">{userData.contactNumber}</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-muted">Emergency Contact:</h6>
                    <p className="mb-0 fw-bold">{userData.emergencyContact}</p>
                  </div>
                  <div className="alert alert-info">
                    <i className="fas fa-info-circle me-2"></i>
                    Welcome back! Your membership is active.
                  </div>
                </div>
              ) : (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Stats Card */}
        {userData && (
          <div className="col-md-6">
            
            {/* Quick Stats Card */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4">
                  <i className="fas fa-chart-line me-2"></i>
                  Quick Stats
                </h3>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 border rounded bg-light">
                      <h6 className="text-muted mb-1">BMI</h6>
                      <h4 className="mb-0">
                        {(userData.weight / Math.pow(userData.height/100, 2)).toFixed(1)}
                      </h4>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border rounded bg-light">
                      <h6 className="text-muted mb-1">Goal</h6>
                      <h4 className="mb-0 fs-6">{userData.goal}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;