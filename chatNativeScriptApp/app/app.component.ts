import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonFunctionsService } from "./services/common-functions-service/common-functions.service";
import { SingletonService } from "./services/singleton-service/singleton.service";
import { SocketService } from "./services/socket-service/socket.service";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor(public cfs: CommonFunctionsService, public singleton: SingletonService,public socketService: SocketService, private router: Router) {
    // verifico se existe token no localstorage, se tiver eu envio para o backend, em que me responde se o token é valido
    if (this.cfs.getToken())
    {
      console.log("have token..");
      this.cfs.postObserver("/api/user/verify", this.cfs.getToken(), {})
      .subscribe( data=>
      {
        // salvo o usuário retornado pelo backend no nosso singleton, para que seja utilizado em todo o sistema
        this.singleton.user = data;
        
        // Inicio o socket( O socket se responsabiliza por receber eventos do servidor, como login de usuários, mensagens, etc..)
        this.socketService.initSocket();

        // Envio o usuário para a tela do chat
        this.router.navigate(['/chat']);
      },
      error=>
      {
        // se o token for inválido, envio o usuário para a tela de login/registro
        this.router.navigate(['/login']);
      })
    }
    else
    {
      // Se não tiver localstorage, envio o usuário para a tela de login/registro
      this.router.navigate(['/login']);
    }
  }
}
