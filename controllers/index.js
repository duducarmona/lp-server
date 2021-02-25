const data = require('../DB.json');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send(data.expedients);
});

module.exports = router;
