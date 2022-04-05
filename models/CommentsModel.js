const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
    body: {
        type: String,
        required: true,
        min: 3
    },
    author: {
        type: String,
        ref: 'Users'
    },
    post: {
        type: String,
    },
});

// Compile model from schema
module.exports = mongoose.model('comments', Comment);
