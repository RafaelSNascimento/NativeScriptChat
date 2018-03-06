import { Component, OnInit, EventEmitter, ViewContainerRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonFunctionsService } from '../../services/common-functions-service/common-functions.service';
import { SingletonService } from '../../services/singleton-service/singleton.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { SocketService } from '../../services/socket-service/socket.service';

@Component({
  selector: 'app-chat',
  moduleId: module.id,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat-common.css']
})
export class ChatComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  socket: any;
  selectedUsers = {};
  listUsers = [];
  loadingUsers = true;
  constructor(private routerExtensions: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef, public socketService: SocketService, fb : FormBuilder, public cfs : CommonFunctionsService, public singleton: SingletonService ) { 
    console.log("here");
    if(!this.socketService.intialized)
    {
      this.socketService.initSocket();
    }
    this.socketService.changeUsersEmitted$.subscribe(()=>{
      if(!this.listUsers.length)
      {
        this.listUsers = this.socketService.listUsers;
        this.loadingUsers = false;
      }
      if (!this._changeDetectionRef['destroyed']) {
        this._changeDetectionRef.detectChanges();
      }
      // é necessário forçar a atualização do array listUsers, pois existe um bug no IOS onde a listview não atualiza quando o array é atualizado por observables
      this.listUsers = [...this.listUsers];
    })
    if(this.socketService.listUsers.length)
    {
      this.listUsers = this.socketService.listUsers;
      this.loadingUsers = false;
      this._changeDetectionRef.detectChanges();
    }
  }

  ngOnInit() {
  }

  selectUser(user){
    this.routerExtensions.navigate(["/chatbox",user._id]);
  }
}
