import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SingletonService {
  //Coloque aqui o ip do servidor
  serverUrl: string = "http://192.168.1.42:3000";
  forms = [];
  listUserChat = [];
  chatBadge = 0;
  userLogged: any;

  constructor() 
  {
    console.log("intializing singleton");
  }

  public get user() : any 
  {
    return this.userLogged;
  }
  
  public set user(v : any) 
  {
    this.userLogged = v;
  }
  
}
