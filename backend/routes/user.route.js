const express = require("express");
const userrouter = express.Router();
const SignUp = require("../controller/user.controller");
const SignIn = require("../controller/user.controller");

userrouter.post("/signup", SignUp.SignUp);
userrouter.post("/signin", SignIn.SignIn);

module.exports = userrouter;
