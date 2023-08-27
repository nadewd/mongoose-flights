const Flight = require('../models/flight');


module.exports = {
    new: newFlight,
    create,
    index
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

function newFlight(req, res) {
    // Render an error message if create action fails
    res.render('flights/new', { errorMsg: '' });
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

