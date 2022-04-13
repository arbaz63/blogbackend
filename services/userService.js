const Users = require("../models/UsersModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs/dist/bcrypt");
//signup
const signup = async (req,res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;
    //hashing password
    hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });
    // Create token
    const token = jwt.sign({
        uid: user._id,
        uname: user.name
      },
      process.env.SECRET_KEY
    );
    user.token = token;
    res.status(200).json({
      status: success,
      _id: user._id,
      token: user.token
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

//login
const login = async (req,res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await Users.findOne({
      email
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({
          uid: user._id,
          uname: user.name
        },
        process.env.SECRET_KEY
      );
      user.token = token;
    }
    res.status(200).json({
      _id: user._id,
      token: user.token
    });

  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  login,
  signup
}