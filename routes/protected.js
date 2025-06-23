const express = require('express');
const authenticateJWT = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, (req, res) => {
  res.send(`Hello ${req.user.username}, you are authorized!`);
});

module.exports = router;
