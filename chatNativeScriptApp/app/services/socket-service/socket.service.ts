import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as SocketIO from "nativescript-socket.io";
import { SingletonService } from '../singleton-service/singleton.service';
import { CommonFunctionsService } from '../common-functions-service/common-functions.service';
@Injectable()
export class SocketService {
    socket: any;
    userBadge = 0;
    selectedUsers = {};
    listUsers = [];
    formTools: EventEmitter<any> = new EventEmitter();
    private emitChangeSource = new Subject<any>();
    changeEmitted$ = this.emitChangeSource.asObservable();
    private emitChangeUsers = new Subject<any>();
    changeUsersEmitted$ = this.emitChangeUsers.asObservable();
    intialized = false;

    constructor(private ngZone:NgZone, public singleton:SingletonService, public cfs: CommonFunctionsService) {}
    public initSocket(){
        // marcamos a variável this.intialized para true, para que o socket não seja iniciado mais de uma vez
        this.intialized = true;

        // pedimos conexão do socket para o servidor
        // OBS: passamos o token do usuário para que o token seja validado na hora da conexão ao socket
        this.socket = SocketIO.connect(this.singleton.serverUrl, {query: {'Authorization': localStorage.getItem('token') }});
        
        // Evento responsável por ouvir logins de usuários
        this.socket.on('userlogin', function (userLogin) {

            console.log("Login de usuário com o id: "+userLogin._id);
            this.ngZone.run(() => {
            // verifico se o id do usuário que efetuou login é igual ao nosso, para que não sejamos notificados do nosso proprio  login em outro dispositivo
                if(userLogin._id != this.singleton.user["_id"])
                {
                    // se for diferente, preciso achar o usuário que efetuou o login e tornar o status dele para true(online)
                    
                    this.listUsers.map(user=>{
                        if(user._id == userLogin._id)
                        {
                            if(!user.status)
                            {
                                user.status = true;
                            }
                        }
                    })
                // ordenamos nossa lista de usuários pelo status
                }
                this.listUsers = this.cfs.orderByProperty(this.listUsers, 'status');
                this.emitChangeUsers.next();
            });
        }.bind(this));

        // lista dos usuários cadastrados no sistema
        this.socket.on('listUsers', (listUsers)=>{
            this.ngZone.run(() => {
                this.listUsers = listUsers.all;
                
                this.listUsers.map(user=>{

                    // pegamos o número da badge do usuário e passamos para o objeto user
                    user["badge"] = listUsers["userBadge"][user._id] || 0;
                    this.singleton.chatBadge += user["badge"];

                    // verificamos se o id do usuário está na lista de usuários online, se estiver, tornamos o status dele para true
                    if(listUsers.available.indexOf(user._id) > -1)
                    {
                        user.status = true;
                    }
                })
                // ordenamos nossa lista de usuários pelo status
                this.listUsers = this.cfs.orderByProperty(this.listUsers, 'status')

                // emitimos um sinal para nosso chatComponent, para dizer que temos uma lista de usuários disponivel para ele
                this.emitChangeUsers.next();
            });
        })

        // Evento responsável por ouvir leituras dos usuários a mensagens que você enviou
        this.socket.on('receiverRead', (userId)=>{
            console.log("recebeu leitura do usuário: "+userId);
            this.ngZone.run(() => {
                if(this.selectedUsers[userId])
                {
                    var currentDate = Date.now();
                    this.selectedUsers[userId].messages.forEach(element => {
                        if(element.toUser == userId && !element["toUserRead"])
                        {
                            element["toUserRead"] = true;
                            element["toUserReadDate"] = currentDate;
                            this.emitChangeSource.next();
                        }
                    });
                }
            })
        })

        // Evento responsável por ouvir logout de usuários
        this.socket.on('userLogout', (userId)=>{
            this.ngZone.run(() => {
            this.listUsers.map(user=>{
                if(user._id == userId)
                {
                    user.status = false;
                }
                })
                this.listUsers = this.cfs.orderByProperty(this.listUsers, 'status');
                this.emitChangeUsers.next();
            })
        })

        // Evento responsável por ouvir o novas mensagens
        this.socket.on('newMessage', (message)=>{
            console.log("new message...");
            this.ngZone.run(() => {
                if(message._id == this.singleton.user["_id"] && this.selectedUsers[message.toUser])
                {
                    this.selectedUsers[message.toUser]["messages"].push(message);
                    if(this.selectedUsers[message.toUser]["chatOpen"])
                    {
                        this.emitChangeSource.next();
                    }
                }
                else
                {
                    if(!this.selectedUsers[message._id])
                    {
                        for(var i =0; i< this.listUsers.length; i++)
                        {
                            if(this.listUsers[i]["_id"] == message._id)
                            {
                                this.listUsers[i]["badge"] ++;
                                this.singleton.chatBadge ++;
                                this.emitChangeUsers.next();
                                break;
                            }
                        }
                    } 
                    else
                    {
                        this.selectedUsers[message._id]["messages"].push(message);
                        if(this.selectedUsers[message._id]["chatOpen"])
                        {
                            this.emmitFocus({room_id: this.selectedUsers[message._id]["room_id"], updateAll: false, senderId: message._id});
                            message["toUserRead"] = true;
                            this.emitChangeSource.next();
                        }
                        else
                        {
                            this.singleton.chatBadge ++;
                            console.log("incrementing the badge...");
                            this.selectedUsers[message._id]["badge"] = this.selectedUsers[message._id]["badge"] + 1;
                            console.log("the badge now is: "+this.selectedUsers[message._id]["badge"]);
                            this.emitChangeUsers.next();
                        }
                    }
                }
            })
        })
    }

    // evento responsável por emitir o focus, ou seja, confirmar leitura de das mensagens
    emmitFocus(obj)
    {
        this.ngZone.run(() => {
            if(this.selectedUsers[obj["senderId"]]["messages"])
            {
                this.socket.emit('focus', obj["room_id"]);
                if(obj["updateAll"])
                {
                    this.selectedUsers[obj["senderId"]]["messages"].forEach(element => {
                        if(element._id == obj["senderId"])
                        {
                            element["toUserRead"] = true;
                        }
                    });
                }
                this.singleton.chatBadge = this.singleton.chatBadge -  this.selectedUsers[obj["senderId"]]["badge"];
                this.selectedUsers[obj["senderId"]]["badge"] = 0;
            }
        })
    }

    // Evento responsável emitir para o servidor a seleção de um usuário
    emmitSelect(_id){
        console.log("user id:"+_id);
        return new Promise((resolve)=>{
            this.socket.emit('selectUser',{_id: this.singleton.user["_id"], toUser: _id}, (room)=>{
                this.ngZone.run(() => {
                    this.selectedUsers[_id]["messages"] = room["messages"] || [];
                    this.selectedUsers[_id]["room_id"] = room["_id"];
                    this.emmitFocus({room_id:room["_id"], senderId: _id, updateAll: true});
                    return resolve();
                })
            })
        })
    }

    // Evento responsável por se desconectar do servidor
    disconect(){
        this.intialized = false;
        this.socket.disconect();
    }

    // Evento responsável por emitir uma mensagem para o servidor
    sendMessage(arr)
    {
      this.socket.emit('sendMessage',  { room_id: arr[2], name: this.singleton.user["name"], _id: this.singleton.user["_id"], message: arr[0], toUser: arr[1], date: Date.now(), toUserRead: false});
    }
}