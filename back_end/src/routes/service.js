const express = require('express');
const router = express.Router();
const { verifyToken } = require('../app/controllers/MiddlewareController.js');

const serviceController = require('../app/controllers/ServiceController.js');

router.post(
  '/updateServiceInfo',
  verifyToken,
  serviceController.updateServiceInfo,
);
router.patch(
  '/updateServiceStatus',
  verifyToken,
  serviceController.updateServiceStatus,
);
router.get('/getAllServices', verifyToken, serviceController.getAllServices);

router.post('/addService', verifyToken, serviceController.addService);

module.exports = router;