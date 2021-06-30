const mongoose = require('mongoose');

var keynoteSchema = mongoose.Schema({
    id: String,
    speaker: String,
    description: String,
    desgination: String,
    linkedIn: String,
    facebook: String,
    instagram: String,

});

module.exports = mongoose.model('keynote', keynoteSchema);