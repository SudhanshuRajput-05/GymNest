const express = require('express');
const router = express.Router();
const { buyMembership, verifyMembership } = require('../controller/membershipController');

router.post('/buy-membership', buyMembership);
router.post('/verify-membership', verifyMembership);

module.exports = router;