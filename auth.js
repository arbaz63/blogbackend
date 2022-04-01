const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    const token = req.headers["bearer"];
    if (!token) {
        return res.status(400).send("No token founded");
    }
    try {
      const verify = jwt.verify(token, 'secret');
      req.user = verify;
    } catch (err) {
      return res.status(400).send("Error in processing token");
    }
    return next();
  };
module.exports = auth;
