const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/test');

var newsSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    image: String,
    date: Date

});

module.exports = mongoose.model('News', newsSchema);