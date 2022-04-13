const Users = require("../models/UsersModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs/dist/bcrypt");
const Constants = require("../constants");
const userServices = require('../services/userService')
const {
  userExist,
  success,
  loginRequired
} = Constants;
//signup
const signup = async (req, res) => {
  userServices.signup(req,res)
};

//login
const login = async (req, res) => {
  userServices.login(req,res);
};

module.exports = {
  signup,
  login
}