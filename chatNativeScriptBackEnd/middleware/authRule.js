var express = require('express');
var router = express.Router();

module.exports =  function() {
  	return {
	    authorizeSA : (req, res, next)=>{
            if(req.user && req.user.user_rule == 1){
                next();
            }
            else{
                res.status(401).send('unauthorized');
            }
        },
        authorizeA : (req, res, next)=>{
            if(req.user && req.user.user_rule <= 2){
                next();
            }
            else{
                res.status(401).send('unauthorized');
            }
        }
	};
}