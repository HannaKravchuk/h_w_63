const express = require('express');
const router = express.Router();

router.post('/set', (req, res) => {
  const { theme } = req.body;
  res.cookie('theme', theme, { maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 днів
  res.send({ message: 'Theme saved' });
});

module.exports = router;
