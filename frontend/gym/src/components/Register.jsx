import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        contactNumber: '',
        password: '',
        emergencyContact: '',
        goal: 'General Fitness'
    });

    const hc = (e) => {
        setError(''); // Clear any previous errors
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const hs = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4500/api/auth/register', form);
            
            if (response.data.token) {
                // Save token and redirect
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setError(error.response?.data?.error || 'Registration failed. Please try again.');
        }
    };

    return <>
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <form
                onSubmit={hs}
                className="bg-white p-5 rounded-4 shadow-lg w-100"
                style={{ maxWidth: '420px' }}
            >
                <h2 className="text-center mb-4 text-primary">
                    <i className="fas fa-user-plus me-2"></i>
                    Register
                </h2>

                {/* Name */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-user me-2 text-secondary"></i>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-envelope me-2 text-secondary"></i>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Contact Number */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-phone-alt me-2 text-secondary"></i>
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        name="contactNumber"
                        className="form-control"
                        placeholder="Enter your contact number"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Emergency Contact */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-ambulance me-2 text-secondary"></i>
                        Emergency Contact
                    </label>
                    <input
                        type="tel"
                        name="emergencyContact"
                        className="form-control"
                        placeholder="Emergency contact number"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Fitness Goal */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-bullseye me-2 text-secondary"></i>
                        Fitness Goal
                    </label>
                    <select
                        name="goal"
                        className="form-select"
                        onChange={hc}
                        required
                        value={form.goal}
                    >
                        <option value="General Fitness">General Fitness</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Muscle Gain">Muscle Gain</option>
                        <option value="Strength Training">Strength Training</option>
                    </select>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="form-label">
                        <i className="fas fa-lock me-2 text-secondary"></i>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Choose a strong password"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <div className="alert alert-danger mb-4">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold shadow-sm mb-3"
                >
                    <i className="fas fa-user-check me-2"></i>
                    Register
                </button>

                <div className="text-center">
                    <span className="text-muted">Already have an account? </span>
                    <Link to="/login" className="text-primary text-decoration-none">
                        <i className="fas fa-sign-in-alt me-1"></i>
                        Login
                    </Link>
                </div>
            </form>
        </div>
    </>
};

export default Register;