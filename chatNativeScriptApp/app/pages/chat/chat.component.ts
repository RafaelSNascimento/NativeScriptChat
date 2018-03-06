import { Component, OnInit, EventEmitter, ViewContainerRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonFunctionsService } from '../../services/common-functions-service/common-functions.service';
import { SingletonService } from '../../services/singleton-service/singleton.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { SocketService } from '../../services/socket-service/socket.service';
import { ListView } from 'tns-core-modules/ui/list-view/list-view';
import { Page } from 'tns-core-modules/ui/page/page';

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
  listView: ListView;
  constructor(private page: Page, private routerExtensions: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef, public socketService: SocketService, fb : FormBuilder, public cfs : CommonFunctionsService, public singleton: SingletonService ) { 
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

      // é necessário forçar a atualização do array listUsers, pois existe um bug no IOS onde a listview não atualiza quando o array é atualizado por observables
      this.listView.refresh();
    })
    if(this.socketService.listUsers.length)
    {
      this.listUsers = this.socketService.listUsers;
      this.loadingUsers = false;
    }
  }

  ngOnInit() {
    this.listView = <ListView>this.page.getViewById("myScroller");
  }

  selectUser(user){
    this.routerExtensions.navigate(["/chatbox",user._id]);
  }
}
