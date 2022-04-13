const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = (req, res, next) => {
  const token = req.headers["bearer"];
  if (!token) {
    return res.status(400).send("No token founded");
  }
  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verify;
  } catch (err) {
    return res.status(400).send("Error in processing token");
  }
  return next();
};
module.exports = auth;