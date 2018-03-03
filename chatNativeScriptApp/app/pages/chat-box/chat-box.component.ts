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
    })
  }

  ngOnInit() {
    this._changeDetectionRef.detectChanges();
  }
  scrollToBottom(){
    if (!this._changeDetectionRef['destroyed']) {
      this._changeDetectionRef.detectChanges();
    }
    var listView = <ListView>this.page.getViewById("myScroller");
    if(listView)
    {
      listView.scrollToIndex(this.user["messages"].length-1);
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