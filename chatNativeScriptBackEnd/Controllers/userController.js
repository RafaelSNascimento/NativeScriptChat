var dbUser = require("../model/users.js");
var crypto = require('crypto');
var auth = require("../middleware/jwtFilter")();

module.exports = {
	login: async function(req, res){
		if(req.body.username && req.body.password){
			return await auth.SignIn(req.body.username,crypto.createHash('md5').update(req.body.password).digest("hex"))
			.then((user)=>{
				return res.json(user);
			})
			.catch(er=>{
				return res.status(401).json({message:"Usuário inválido!"});
			})
		}
		else
		{
			res.status(401).json({message:"Preencha todos os campos."});
		}
	},
	new : function(req, res) 
	{
		const user = req.body;
		if( !user.username || !user.password || !user.name )
		{
			return res.status(400).json({message:"Dados inválidos!"});
		}
		else
		{
			user.password = crypto.createHash('md5').update(user.password).digest("hex");
			dbUser.user.create(user)
			.then(async (user)=>{
				user = user.toObject();
				user.token = await auth.SignInWithoutVerify(user._id);
				return res.status(200).json(user);
			})
			.catch((er)=>{
				return res.status(400).json({message:"Dados existentes no chat."});
			});
		}
	},
	verifyUser: function(req, res){
		if(req.user){
			res.status(200).json(req.user);
		}
		else
		{
			res.status(401).send('unauthorized');
		}
	}
}