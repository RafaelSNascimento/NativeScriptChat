var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
    messages: Array
});
  
exports.room = mongoose.model('Room', RoomSchema);