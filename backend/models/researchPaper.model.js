const mongoose = require('mongoose');

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
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('researchpapers', researchPaperSchema);
