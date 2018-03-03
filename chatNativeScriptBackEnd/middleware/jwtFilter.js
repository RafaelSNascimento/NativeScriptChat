var express = require('express');
var router = express.Router();
var express = require("express");
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var dbUser = require("../model/users.js");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromHeader('authorization');
jwtOptions.secretOrKey = 'backendfornativescript';
jwtOptions.passReqToCallback = true;
var ObjectId = require('mongodb').ObjectID;

module.exports =  function() {
	var strategy = new JwtStrategy(jwtOptions, async function(req, jwt_payload, next) {
		await dbUser.user.findOne({"_id":  ObjectId(jwt_payload.id)}).lean()
		.then(user=>{
			if (user) 
			{
				next(null, user);
			} else {
				next(null, false);
			}
		})
	});
	passport.use(strategy);
  	return {
	    initialize: function() {
	      return passport.initialize();
		},
		authenticate: function() {
	      return passport.authenticate("jwt", {session :false});
		},
	    SignIn: (username, password) =>{
			return new Promise( (resolve, reject)=>{
				dbUser.user.findOne({"username":username, "password": password}).lean()
				.then( result=>{
					if(result){
						var payload = {id: result._id};
						result.token = jwt.sign(payload, jwtOptions.secretOrKey);
						return  resolve(result);
					}else{
						return reject();
					}
				})
			})
		},
		SignInWithoutVerify:  (userId)=>{
	    	var payload = {id: userId};
	    	return  jwt.sign(payload, jwtOptions.secretOrKey)
		},
	    authorizeMe: (token)=>{
			return new Promise((resolve)=>{
				try {
					decoded =  jwt.verify(token, jwtOptions.secretOrKey);
					return resolve(decoded)
				} catch (e) {
					return reject();
				}
			})
	    	
	    }
	};
}