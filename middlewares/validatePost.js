const Constants = require('../constants')
const {
  titleError,
  bodyError,
  requiredPostError
} = Constants
const validatePost = (req, res, next) => {
  const {
    title,
    body,
    draft
  } = req.body
  if (title && body) {
    if (title.length < 3)
      return res.status(400).json({
        Error: titleError
      })
    if (body.length < 3)
      return res.status(400).json({
        Error: bodyError
      })
  } else {
    res.status(400).json({
      Error: requiredPostError
    })
  }
  next()
};
module.exports = validatePost;