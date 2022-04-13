const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    body: {
        type: String,
        required: true,
        min: 3
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
});

// Compile model from schema
module.exports = mongoose.model('comments', Comment);