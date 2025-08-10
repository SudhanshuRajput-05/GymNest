const Contact = require('../models/contact');

// Create new contact
exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, subject, address, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !subject || !address || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all required fields'
            });
        }

        // Create new contact
        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            address,
            message
        });

        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            contact
        });

    } catch (error) {
        console.error('Contact creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all contacts (for admin purposes)
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: contacts.length,
            contacts
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};
