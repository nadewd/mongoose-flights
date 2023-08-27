const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['United', 'Delta', 'Southwest'],
        default: 'LAX'
    }, 
    airport: { 
        type: String,
        enum: ['LAX', 'ONT', 'OAK', 'SFO', 'JFK'],
        default: 'LAX'
     },
    flightNo: {
        type: Number,
        min: 50,
        max: 9999
    },
    departs: { 
        type: Date, 
        default: function() {
            return newDate().setFullYear(date.getFullYear() + 1);
        }
    }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
