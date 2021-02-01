const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
var crypto = require("crypto");




router.post('/register', (req, res, next) => {
  let newUser = new User({
    username:req.body.username,
    password: req.body.password,
  });
  User.addUser(newUser, (err, user) => {
    if(err){
      return res.json({success:false, msg:"Failed to register user"});
    } else {
      return res.json({success: true, msg:"User registered"});
    }
  });
  return res.json({success: true, msg:"Register"})
});



//Authenticate
router.post('/authenticate', (req, res, next) => {
  console.log(req.body)
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err,user)=>{
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'User not Found'})
    }
    console.log(user)
    User.comparePassword(password, user.password, (err, isMatch) =>{
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({user},"mysecret", {
          expiresIn: 604800 //1 week
        });
        return res.json({
          success:true,
          token:'JWT '+token,
          user:{
            id:user._id,
            username: user.username,
          }
        })
      } else {
        return res.json({success: false, msg:"Wrong password"})
      }
    });
  })
});
module.exports = router;
