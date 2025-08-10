import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MembershipList = () => {
    const [memberships, setMemberships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMemberships = async () => {
            try {
                const response = await axios.get('http://localhost:4500/api/membership/all');
                setMemberships(response.data.memberships);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch memberships');
                setLoading(false);
                console.error('Error fetching memberships:', err);
            }
        };

        fetchMemberships();
    }, []);

    if (loading) {
        return <div className="container mt-5 text-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }

    if (error) {
        return <div className="container mt-5">
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>;
    }

    const getStatusBadgeColor = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-success';
            case 'pending':
                return 'bg-warning';
            case 'expired':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Membership Subscriptions</h2>
            <div className="row">
                {memberships.map((membership) => (
                    <div key={membership._id} className="col-md-6 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-primary text-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">
                                        <i className="fas fa-user-circle me-2"></i>
                                        {membership.name}
                                    </h5>
                                    <span className={`badge ${getStatusBadgeColor(membership.status)}`}>
                                        {membership.status}
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <h6 className="text-primary">Personal Information</h6>
                                    <div className="ms-3">
                                        <div>
                                            <i className="fas fa-envelope text-muted me-2"></i>
                                            {membership.email}
                                        </div>
                                        <div>
                                            <i className="fas fa-phone text-muted me-2"></i>
                                            {membership.phone}
                                        </div>
                                        <div>
                                            <i className="fas fa-calendar-alt text-muted me-2"></i>
                                            {membership.age} years old
                                        </div>
                                        <div>
                                            <i className="fas fa-venus-mars text-muted me-2"></i>
                                            {membership.gender}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <h6 className="text-primary">Plan Details</h6>
                                    <div className="ms-3">
                                        <div>
                                            <i className="fas fa-calendar text-muted me-2"></i>
                                            Start: {new Date(membership.startDate).toLocaleDateString()}
                                        </div>
                                        <div>
                                            <i className="fas fa-clock text-muted me-2"></i>
                                            Duration: {membership.duration}
                                        </div>
                                        <div>
                                            <i className="fas fa-money-bill-wave text-muted me-2"></i>
                                            Amount Paid: ₹{membership.amount}
                                        </div>
                                        {membership.paymentId && (
                                            <div>
                                                <i className="fas fa-receipt text-muted me-2"></i>
                                                Payment ID: {membership.paymentId}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h6 className="text-primary">Medical Information</h6>
                                    <div className="ms-3">
                                        <div>
                                            <i className="fas fa-heartbeat text-muted me-2"></i>
                                            Any Health Issues: {membership.healthIssues ? 'Yes' : 'No'}
                                        </div>
                                        {membership.healthIssues && (
                                            <div className="text-muted small mt-1">
                                                {membership.healthIssues}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <small>
                                    <i className="fas fa-clock me-2"></i>
                                    Registered on: {new Date(membership.createdAt).toLocaleString()}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {memberships.length === 0 && (
                <div className="text-center">
                    <p>No membership subscriptions found.</p>
                </div>
            )}
        </div>
    );
};

export default MembershipList;
