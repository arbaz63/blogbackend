const Constants = require('../constants')
const {
    bodyError,
    commentRequired
} = Constants
const validatePost = (req, res, next) => {
    const {
        body
    } = req.body
    if (body) {
        if (body.length < 3)
            return res.status(400).json({
                Error: bodyError
            })
    } else {
        res.status(400).json({
            Error: commentRequired
        })
    }
    next()
};
module.exports = validatePost;