var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var UserSchema = new mongoose.Schema({
	name: {type:String, required: true},
	username: {type:String, required: true, index: {unique: true}},
	password: {type:String, required: true, select: false},
    rooms: [{
		room_id : String,
		to_user : String
	}]
});
exports.user = mongoose.model('User', UserSchema);