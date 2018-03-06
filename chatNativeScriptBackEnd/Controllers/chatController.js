var dbUser = require("../model/users.js");
var Chat = require('../model/chat.js');
var usernames = {};
var ObjectId = require('mongodb').ObjectID;
var available = {};
var users = {};
var rooms = {};
var auth = require("../middleware/jwtFilter")();
module.exports = {
    init: function(io){
        io.sockets.on('connection', function (socket) {
            var Token = socket.request;
            var userId = '';
            var userBadge = {};
            if(Token._query && Token._query['Authorization'].length){
                auth.authorizeMe(Token._query['Authorization'])
                .then((userVerified)=>{
                    socket._id = userVerified.id;
                    dbUser.user.findOne({"_id":  ObjectId(userVerified.id)}).lean()
                    .then( async user=>{
                        if(!users[user._id])
                        {
                            users[user._id] = [socket];
                        }
                        else
                        {
                            users[user._id].push(socket);
                        }
                        var obj={};
                        userBadge = await Promise.all(user.rooms.map(el=>{
                            obj[el.to_user] =  ObjectId(el.room_id);
                            return
                        }))
                        .then(()=>{
                            return obj;
                        })
                        .then(result=>{
                            return Chat.room.aggregate([
                                { $match: { _id: {$in : Object.values(result)}}}, 
                                { $project: {
                                    messages: { $filter: {
                                        input: '$messages',
                                        as: 'item',
                                        cond: { $and:[{$eq: ['$$item.toUser', socket._id]},{$eq: ['$$item.toUserRead', false]}]}
                                    }}
                                }}
                            ])
                        })
                        .then( result=>{
                            var finalResult = {};
                            return Promise.all(result.map(el=>{
                                if(el["messages"] && el["messages"].length)
                                {
                                    finalResult[el["messages"][0]["_id"]] = el["messages"].length;
                                }
                                return
                            }))
                            .then(()=>{
                                return finalResult
                            })
                        })
                        socket.join(user._id);
                        io.sockets.emit('userlogin', {_id: user._id, name: user.name})
                        return user._id;
                    })
                    .then(userId=>{
                        return dbUser.user.find({_id:{$ne: ObjectId(userId)}}).lean()
                    })
                    .then((allUsers)=>{
                        try{
                            console.log(Object.keys(users));
                            return socket.emit('listUsers', {"all": allUsers, "userBadge": userBadge, "available": Object.keys(users)});

                        }catch(ex){
                            console.log(ex);
                        }
                    })

                    socket.on('sendMessage', async function (data) {
                        var roomId = data.room_id;
                        delete data["room_id"];
                        if(users[data.toUser] && users[data.toUser].length)
                        {
                            users[data.toUser].map(el=>{
                                el.join(roomId);
                            })
                        }
                        await Chat.room.update({_id: roomId},{ $push:{messages: data}})
                        io.sockets.in(roomId).emit('newMessage', data);
                    });

                    socket.on('focus', async function (roomId) {
                        await Chat.room.aggregate([
                            { $match: { _id: ObjectId(roomId)}}, 
                            { $project: {
                                messages: { $filter: {
                                    input: '$messages',
                                    as: 'item',
                                    cond: { $and:{$eq: ['$$item.toUser', socket._id], $eq: ['$$item.toUserRead', false]}}
                                }}
                            }}
                        ])
                        .then(async result=>{
                            var currentDate =  Date.now();
                            if(result[0] && result[0]["messages"])
                            {
                                return await Promise.all(
                                    result[0]["messages"].map(async (elem)=>{
                                        return await Chat.room.update({_id: roomId, messages: { $elemMatch: {'toUser': socket._id, 'date': elem.date}}}, { $set:{ "messages.$.toUserRead" : true, "messages.$.toUserReadDate": currentDate}})
                                    })
                                )
                            }
                        });
                        socket.to(roomId).emit('receiverRead', socket._id);
                    });
                    socket.on('selectUser', async function (data, callbackFn) {
                        var roomName = '';
                        var user = await dbUser.user.findOne({_id: data._id, rooms: { $elemMatch: { to_user: data.toUser }}}, { "rooms.$": 1 });
                        if( !user ){
                            roomName = await Chat.room.create({messages:[]});
                            roomName = roomName.id;
                            await dbUser.user.update({_id: ObjectId(data._id)},{ $push:{rooms: {room_id: roomName, to_user: data.toUser}}});
                            await dbUser.user.update({_id:  ObjectId(data.toUser)},{ $push:{rooms:  {room_id: roomName, to_user: data._id}}}, { upsert: true });
                            var toUser = await dbUser.user.findOne({_id: data.toUser});
                            if(users[data.toUser])
                            {
                                users[data.toUser].map(el=>{
                                    el.join(roomName);
                                })
                            }
                            users[data._id].map(el=>{
                                el.join(roomName);
                            })
                            callbackFn({_id: roomName, messages:[]});
                        }
                        else
                        {
                            roomName = user["rooms"][0]["room_id"];
                            room = await Chat.room.findOne({_id: ObjectId(roomName)}).lean();
                            console.log(room);
                            if(users[data.toUser])
                            {
                                users[data.toUser].map(el=>{
                                    el.join(roomName);
                                })
                            }
                            users[data._id].map(el=>{
                                el.join(roomName);
                            })
                            callbackFn(room);
                        }
                    });

                    socket.on('disconnect', function () {
                        delete users[socket._id];
                        io.sockets.emit('userLogout', socket._id);
                    });
                })
                .catch(er=>{
                    socket.disconnect();
                    delete users[socket._id];
                })
            } else
            {
                console.log("Usuário rejeitado!");
                socket.disconnect();
            }
        });
    }
}