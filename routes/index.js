const User = require('./userRoute')
const Post = require('./postRoute')
const Comment = require('./commentRoute')
module.exports = (app)=>{
    Post(app)
    Comment(app)
    User(app)
}