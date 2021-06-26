const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/test');

var researchPaperSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    paperTopic: {
        type: String,
        required: true
    },
    paperLink: {
        type: String,
        required: true
    },
    paperUploader: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('researchpapers', researchPaperSchema);
