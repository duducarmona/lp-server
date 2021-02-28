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

// Get one expedient.
router.get('/expedients/:id', (req, res) => {
	const { id } = req.params;

	res.send(data.expedients[id - 1]);
});

// Get one substitute.
router.get('/substitutes/:id', (req, res) => {
	const { id } = req.params;

	res.send(data.substitutes[id - 1]);
});

module.exports = router;
