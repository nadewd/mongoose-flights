const Flight = require('../models/flight');


module.exports = {
    new: newFlight,
    create,
    index, 
    show
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { 
        title: 'All Flights',
        flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Details', flight })
}

function newFlight(req, res) {
    // Render an error message if create action fails
    res.render('flights/new', { 
        title: 'Add Flight', 
        errorMsg: '' });
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

