const express = require('express');
const router = express.Router();
const { createContact, getAllContacts } = require('../controller/contactController');

// Create contact route
router.post('/create', createContact);

// Get all contacts route (protected, admin only)
router.get('/all', getAllContacts);

module.exports = router;
