var express = require('express');
var router = express.Router();
var express = require("express");
var auth = require("../middleware/jwtFilter")();
var authRule = require("../middleware/authRule")();
var passport = require("passport");
var userController = require("../Controllers/userController.js");

router.post("/user/new", userController.new);
router.post("/login", userController.login);
router.post("/user/verify", auth.authenticate(), userController.verifyUser);

module.exports = router;
