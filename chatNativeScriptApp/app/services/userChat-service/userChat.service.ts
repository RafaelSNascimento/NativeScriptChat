import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as SocketIO from "nativescript-socket.io";
import { SingletonService } from '../singleton-service/singleton.service';
import { CommonFunctionsService } from '../common-functions-service/common-functions.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';
import "rxjs/add/operator/switchMap";
import { SocketService } from '../socket-service/socket.service';
@Injectable()
export class UserChatService implements Resolve<any> {
    selectedUsers = {};
    listUsers = [];
    _id;
    constructor(private ngZone:NgZone, public cfs: CommonFunctionsService, private socketService: SocketService) {}
    resolve(route: ActivatedRouteSnapshot): Promise<any> {
        // pegamos o parâmetro do usuário selecionado da rota
        this._id = route.params._id;
        console.log("user selected id:"+this._id);

        // criamos a promise responsável por avisar que os dados foram alimentados e que pode carregar a view chatbox
        return new Promise(resolve=>{
            // verifico se o usuário ja foi selecionado alguma vez, para que eu não faça requisições desnecessárias ao servidor
            if(!this.socketService.selectedUsers[this._id])
            {
                // como o usuário ainda não foi selecionado, precisamos varrer a lista dos usuários(listUsers) disponiveis e pegar o usuário que desejamos conversar
                for(var i=0; i< this.socketService.listUsers.length; i++){

                    // se o id do usuário do indice "i" for igual ao id que pegamos pela rota, chegamos a conclusão que esse é o usuário desejado
                    if(this.socketService.listUsers[i]["_id"] == this._id)
                    {
                    // OBS: precisamos rodar isso dentro do angular, pois existe um BUG onde o socket roda fóra do angular
                    this.ngZone.run(()=>{

                        // passamos o usuário para a lista de usuários selecionados(selectedUsers)
                        this.socketService.selectedUsers[this._id] = this.socketService.listUsers[i];

                        // Tornamos true a flag responsavel por nos dizer se o chat do usuário selecionado está aberto ou não
                        // a flag será responsável por incrementar a badge do chat e disparar o visto das mensagens
                        this.socketService.selectedUsers[this._id]["chatOpen"] = true;
                        console.log("selecting user...");

                        // chamamos uma função do socketService "emmitSelect", onde o mesmo retorna uma promise.
                        return resolve(this.socketService.emmitSelect(this._id));
                    })
                    break;
                    }
                }
            
            }
            else
            {
                this.ngZone.run(()=>{
                    this.socketService.selectedUsers[this._id]["chatOpen"] = true;
                    return resolve(true)
                })
            }
        })
    }
}