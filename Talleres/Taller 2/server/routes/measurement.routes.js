const express = require('express');
const router = express.Router();

const measurement = require('../controllers/measurement.controller');

router.get('/', measurement.getMeasurements);
router.post('/', measurement.createMeasurement);
router.get('/:id', measurement.getMeasurement);
router.put('/:id', measurement.editMeasurement);
router.delete('/:id', measurement.deleteMeasurement);

module.exports = router;