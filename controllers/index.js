const data = require('../DB.json');
const express = require('express');

const router = express.Router();

// Get all the expedients.
router.get('/expedients', (req, res) => {
	res.send(data.expedients);
});

// Get all the substitutes.
router.get('/substitutes', (req, res) => {
	res.send(data.substitutes);
});

module.exports = router;
