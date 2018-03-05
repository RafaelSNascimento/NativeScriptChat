import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, NgZone, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SingletonService } from '../../services/singleton-service/singleton.service';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Page } from 'tns-core-modules/ui/page/page';
import { ListView } from "ui/list-view"
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import "rxjs/add/operator/switchMap";
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services/socket-service/socket.service';

declare var $: any;
@Component({
  selector: 'app-chat-box',
  moduleId: module.id,
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  user: any;
  message = "";
  user_id: number;
  listView: ListView;
  constructor(public route: ActivatedRoute, public routerExtensions: RouterExtensions,private pageRoute: PageRoute, private _changeDetectionRef: ChangeDetectorRef, public singleton: SingletonService, public socketService: SocketService, private page: Page) {
    this.route.params.subscribe((params)=>{
      this.user_id =  params["_id"];
    })
    console.log("opening the chat");
    this.user = this.socketService.selectedUsers[this.user_id];
    this.socketService.emmitFocus({room_id: this.user["room_id"], updateAll: false, senderId: this.user["_id"]})
    this.user["chatOpen"] = true;
    this.socketService.changeEmitted$.subscribe(()=>{
      this.scrollToBottom();
      this.user = [...this.user];
    })
  }

  ngOnInit() {
    console.log("ccalling me 1");
    this._changeDetectionRef.detectChanges();
    this.listView = <ListView>this.page.getViewById("myScroller");
  }
  scrollToBottom(){
    if (!this._changeDetectionRef['destroyed']) {
      this._changeDetectionRef.detectChanges();
    }
    if(this.listView && this.user["messages"].length > 2)
    {
      this.listView.scrollToIndex(this.user["messages"].length-1);
    }
  }
  ngOnDestroy()
  {
    this._changeDetectionRef.detach();
    this.user["chatOpen"] = false;
  }
  goBack() {
    this.routerExtensions.back();
  }
  sendMessage(toUser, roomId)
  {
    if(this.message)
    {
      this.socketService.sendMessage([this.message, toUser, roomId]);
      this.message="";
    }
  }
}