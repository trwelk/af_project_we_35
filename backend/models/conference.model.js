const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/test');

var conferenceSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    year: String,
    dates: Array,
    month: String,

});

module.exports = mongoose.model('conference', conferenceSchema);