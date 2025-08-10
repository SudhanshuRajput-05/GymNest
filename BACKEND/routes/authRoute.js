const express = require('express');
const router = express.Router();
const authCtrl = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Authentication routes
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

// Protected routes (require authentication)
router.get('/user', authMiddleware, authCtrl.getUserProfile);
router.put('/profile', authMiddleware, authCtrl.updateProfile);

module.exports = router;