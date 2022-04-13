const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String,
        required: true,
        min: 3
    },
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
    draft: { //is active
        type: Boolean,
        default: true
    },

}, {
    timestamps: true
});

// Compile model from schema
module.exports = mongoose.model('posts', Post);