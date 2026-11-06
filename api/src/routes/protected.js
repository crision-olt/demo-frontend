const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');

// Protected endpoint (S7)
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({
    message: 'You have access to the Demo App!',
    userId: req.userId,
    timestamp: new Date()
  });
});

module.exports = router;
