const express = require('express');
const router = express.Router();

const indicator = require('../controllers/indicator.controller');

router.get('/', indicator.getIndicators);
router.post('/', indicator.createIndicator);
router.get('/:id', indicator.getIndicator);
router.put('/:id', indicator.editIndicator);
router.delete('/:id', indicator.deleteIndicator);

module.exports = router;