const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

async function newTicket(req, res) {
    res.render('tickets/new', { title: 'Add Ticket', tickets });
}

async function create(req, res) {
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/tickets/new');
}