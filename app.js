const express = require('express')
const cors = require('cors')
const DBconnection = require('./DatabaseInit')
const User = require('./routes/userRoute')
const Post = require('./routes/postRoute')
const Comment = require('./routes/commentRoute')
module.exports = () => {
    const app = express()
    DBconnection()
    //setting up middlewares
    app.use(cors())
    app.use(express.json());
    require('./routes')(app)
    return app
}