const express = require('express');
const router = express.Router();
const MiddlewareController = require('../app/controllers/MiddlewareController');

const bookingController = require('../app/controllers/BookingController');

router.get('/', MiddlewareController.verifyToken, bookingController.index);

module.exports = router;
