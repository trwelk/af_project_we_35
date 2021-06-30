const mongoose = require('mongoose');


var conferenceSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    year: String,
    dates: Array,
    month: String,

});

module.exports = mongoose.model('conference', conferenceSchema);