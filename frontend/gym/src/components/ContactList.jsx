import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:4500/api/contact/all');
                setContacts(response.data.contacts);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch contacts');
                setLoading(false);
                console.error('Error fetching contacts:', err);
            }
        };

        fetchContacts();
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

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Messages</h2>
            <div className="row">
                {contacts.map((contact) => (
                    <div key={contact._id} className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title mb-0">
                                        <i className="fas fa-user text-primary me-2"></i>
                                        {contact.name}
                                    </h5>
                                    <span className="badge bg-primary">{contact.subject}</span>
                                </div>
                                <div className="mb-2">
                                    <i className="fas fa-envelope text-muted me-2"></i>
                                    {contact.email}
                                </div>
                                <div className="mb-2">
                                    <i className="fas fa-phone text-muted me-2"></i>
                                    {contact.phone}
                                </div>
                                <div className="mb-2">
                                    <i className="fas fa-map-marker-alt text-muted me-2"></i>
                                    {contact.address}
                                </div>
                                <hr />
                                <div className="mb-2">
                                    <strong>Message:</strong>
                                    <p className="card-text mt-2">{contact.message}</p>
                                </div>
                                <div className="text-muted small">
                                    <i className="fas fa-clock me-2"></i>
                                    {new Date(contact.createdAt).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {contacts.length === 0 && (
                <div className="text-center">
                    <p>No contact messages found.</p>
                </div>
            )}
        </div>
    );
};

export default ContactList;
