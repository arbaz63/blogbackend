const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  name: {
      type: String,
      required: true,
      min: 3
  },
  email: { 
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 3
},
  token: {
    type: String
  }
});

// Compile model from schema
module.exports  = mongoose.model('Users', User );
