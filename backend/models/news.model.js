const mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    image: String,
    date: Date

});

module.exports = mongoose.model('News', newsSchema);