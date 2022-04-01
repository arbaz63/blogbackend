const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
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
        ref: 'Users'
    },
    draft:{//is active
        type: Boolean,
    },
    date: {type: Date, default: Date.now()}  

});

// Compile model from schema
module.exports = mongoose.model('posts', Post);
