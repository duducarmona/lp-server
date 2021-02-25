const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	})
);

app.use(router);

const expedientsRouter = require('./controllers/index');

app.use('/expedients', expedientsRouter);

module.exports = app;
