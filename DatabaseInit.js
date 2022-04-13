const mongoose = require('mongoose');

//Set up mongoose connection
module.exports = function () {
    const mongoDB = process.env.MONGO_DB_URL;
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}