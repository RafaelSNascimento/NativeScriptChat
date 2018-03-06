"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var singleton_service_1 = require("../../services/singleton-service/singleton.service");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var router_2 = require("@angular/router");
var socket_service_1 = require("../../services/socket-service/socket.service");
var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(route, routerExtensions, pageRoute, _changeDetectionRef, singleton, socketService, page) {
        var _this = this;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this._changeDetectionRef = _changeDetectionRef;
        this.singleton = singleton;
        this.socketService = socketService;
        this.page = page;
        this.message = "";
        this.route.params.subscribe(function (params) {
            _this.user_id = params["_id"];
        });
        console.log("opening the chat");
        this.user = this.socketService.selectedUsers[this.user_id];
        this.socketService.emmitFocus({ room_id: this.user["room_id"], updateAll: false, senderId: this.user["_id"] });
        this.user["chatOpen"] = true;
        this.socketService.changeEmitted$.subscribe(function () {
            console.log("chamou");
            _this.scrollToBottom();
            // é necessário forçar a atualização do objeto user, pois existe um bug no IOS onde a listview não atualiza quando o array é atualizado por observables
            _this.listView.refresh();
        });
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        this._changeDetectionRef.detectChanges();
        this.listView = this.page.getViewById("myScroller");
    };
    ChatBoxComponent.prototype.scrollToBottom = function () {
        if (!this._changeDetectionRef['destroyed']) {
            this._changeDetectionRef.detectChanges();
        }
        if (this.listView && this.user["messages"].length > 2) {
            console.log("here");
            this.listView.refresh();
            this.listView.scrollToIndex(this.user["messages"].length - 1);
            console.log("done");
        }
    };
    ChatBoxComponent.prototype.ngOnDestroy = function () {
        this._changeDetectionRef.detach();
        this.user["chatOpen"] = false;
    };
    ChatBoxComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ChatBoxComponent.prototype.sendMessage = function (toUser, roomId) {
        if (this.message) {
            this.socketService.sendMessage([this.message, toUser, roomId]);
            this.message = "";
        }
    };
    ChatBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-chat-box',
            moduleId: module.id,
            templateUrl: './chat-box.component.html',
            styleUrls: ['./chat-box.component.css']
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.RouterExtensions, router_1.PageRoute, core_1.ChangeDetectorRef, singleton_service_1.SingletonService, socket_service_1.SocketService, page_1.Page])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());
exports.ChatBoxComponent = ChatBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtLO0FBQ2xLLHdGQUFzRjtBQUV0RixzREFBcUQ7QUFFckQsc0RBQTBFO0FBQzFFLHVDQUFxQztBQUNyQywwQ0FBeUU7QUFDekUsK0VBQTZFO0FBUzdFO0lBS0UsMEJBQW1CLEtBQXFCLEVBQVMsZ0JBQWtDLEVBQVMsU0FBb0IsRUFBVSxtQkFBc0MsRUFBUyxTQUEyQixFQUFTLGFBQTRCLEVBQVUsSUFBVTtRQUE3UCxpQkFlQztRQWZrQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDdQLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFJWCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUE7UUFDNUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRCLHVKQUF1SjtZQUN2SixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0QseUNBQWMsR0FBZDtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ3JELENBQUM7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUNELHNDQUFXLEdBQVg7UUFFRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELHNDQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUUsTUFBTTtRQUV4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7WUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7SUFyRFUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQU0wQix1QkFBYyxFQUEyQix5QkFBZ0IsRUFBb0Isa0JBQVMsRUFBK0Isd0JBQWlCLEVBQW9CLG9DQUFnQixFQUF3Qiw4QkFBYSxFQUFnQixXQUFJO09BTGxQLGdCQUFnQixDQXNENUI7SUFBRCx1QkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2luZ2xldG9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NpbmdsZXRvbi1zZXJ2aWNlL3NpbmdsZXRvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiXG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29ja2V0LXNlcnZpY2Uvc29ja2V0LnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdC1ib3gnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWJveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IGFueTtcbiAgbWVzc2FnZSA9IFwiXCI7XG4gIHVzZXJfaWQ6IG51bWJlcjtcbiAgbGlzdFZpZXc6IExpc3RWaWV3O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc2luZ2xldG9uOiBTaW5nbGV0b25TZXJ2aWNlLCBwdWJsaWMgc29ja2V0U2VydmljZTogU29ja2V0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XG4gICAgICB0aGlzLnVzZXJfaWQgPSAgcGFyYW1zW1wiX2lkXCJdO1xuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJvcGVuaW5nIHRoZSBjaGF0XCIpO1xuICAgIHRoaXMudXNlciA9IHRoaXMuc29ja2V0U2VydmljZS5zZWxlY3RlZFVzZXJzW3RoaXMudXNlcl9pZF07XG4gICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmVtbWl0Rm9jdXMoe3Jvb21faWQ6IHRoaXMudXNlcltcInJvb21faWRcIl0sIHVwZGF0ZUFsbDogZmFsc2UsIHNlbmRlcklkOiB0aGlzLnVzZXJbXCJfaWRcIl19KVxuICAgIHRoaXMudXNlcltcImNoYXRPcGVuXCJdID0gdHJ1ZTtcbiAgICB0aGlzLnNvY2tldFNlcnZpY2UuY2hhbmdlRW1pdHRlZCQuc3Vic2NyaWJlKCgpPT57XG4gICAgICBjb25zb2xlLmxvZyhcImNoYW1vdVwiKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblxuICAgICAgLy8gw6kgbmVjZXNzw6FyaW8gZm9yw6dhciBhIGF0dWFsaXphw6fDo28gZG8gb2JqZXRvIHVzZXIsIHBvaXMgZXhpc3RlIHVtIGJ1ZyBubyBJT1Mgb25kZSBhIGxpc3R2aWV3IG7Do28gYXR1YWxpemEgcXVhbmRvIG8gYXJyYXkgw6kgYXR1YWxpemFkbyBwb3Igb2JzZXJ2YWJsZXNcbiAgICAgIHRoaXMubGlzdFZpZXcucmVmcmVzaCgpO1xuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubGlzdFZpZXcgPSA8TGlzdFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibXlTY3JvbGxlclwiKTtcbiAgfVxuICBzY3JvbGxUb0JvdHRvbSgpe1xuICAgIGlmICghdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmWydkZXN0cm95ZWQnXSkge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgaWYodGhpcy5saXN0VmlldyAmJiB0aGlzLnVzZXJbXCJtZXNzYWdlc1wiXS5sZW5ndGggPiAyKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICAgIHRoaXMubGlzdFZpZXcucmVmcmVzaCgpO1xuICAgICAgdGhpcy5saXN0Vmlldy5zY3JvbGxUb0luZGV4KHRoaXMudXNlcltcIm1lc3NhZ2VzXCJdLmxlbmd0aC0xKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKVxuICB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGFjaCgpO1xuICAgIHRoaXMudXNlcltcImNoYXRPcGVuXCJdID0gZmFsc2U7XG4gIH1cbiAgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbiAgc2VuZE1lc3NhZ2UodG9Vc2VyLCByb29tSWQpXG4gIHtcbiAgICBpZih0aGlzLm1lc3NhZ2UpXG4gICAge1xuICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLnNlbmRNZXNzYWdlKFt0aGlzLm1lc3NhZ2UsIHRvVXNlciwgcm9vbUlkXSk7XG4gICAgICB0aGlzLm1lc3NhZ2U9XCJcIjtcbiAgICB9XG4gIH1cbn0iXX0=