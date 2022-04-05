
var express = require('express');
const Users = require('../models/UsersModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcryptjs/dist/bcrypt');
var router = express.Router();
//singup
router.post("/signup", async (req, res) => {

    try {
      const oldUser = await Users.findOne({ email:req.body.email });
      if (oldUser) {
        return res.status(400).json("User Already Exist.");
      }
      //hashing password
      hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await Users.create({
        name: req.body.name,
        email: req.body.email, 
        password: hashedPassword,
      });
      res.status(200).json({status:"Registered successfully"});
    } catch (err) {
      res.status(400).send(err)
    }
  });
  
//login
router.post("/login", async (req, res) => {
    try {
      const user = await Users.findOne({ email:req.body.email });
      if (user && (await bcrypt.compare(req.body.password, user.password))) {
        // Create token
        const token = jwt.sign(
          { uid: user._id, uname:user.name },process.env.SECRET_KEY
        );
        user.token = token;
        res.status(200).json({_id:user._id, token:user.token});
      }
      else{
          res.status(400).json("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  });
module.exports = router;