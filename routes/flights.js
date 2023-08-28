var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);
// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/:id MUST be below new route
router.get('/:id', flightsCtrl.show);

module.exports = router;
