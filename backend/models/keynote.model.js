const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/test');

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