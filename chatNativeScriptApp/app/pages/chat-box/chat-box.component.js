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
            _this.scrollToBottom();
        });
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        this._changeDetectionRef.detectChanges();
    };
    ChatBoxComponent.prototype.scrollToBottom = function () {
        if (!this._changeDetectionRef['destroyed']) {
            this._changeDetectionRef.detectChanges();
        }
        var listView = this.page.getViewById("myScroller");
        if (listView) {
            listView.scrollToIndex(this.user["messages"].length - 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtLO0FBQ2xLLHdGQUFzRjtBQUV0RixzREFBcUQ7QUFFckQsc0RBQTBFO0FBQzFFLHVDQUFxQztBQUNyQywwQ0FBeUU7QUFDekUsK0VBQTZFO0FBUzdFO0lBSUUsMEJBQW1CLEtBQXFCLEVBQVMsZ0JBQWtDLEVBQVMsU0FBb0IsRUFBVSxtQkFBc0MsRUFBUyxTQUEyQixFQUFTLGFBQTRCLEVBQVUsSUFBVTtRQUE3UCxpQkFXQztRQVhrQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjdQLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHWCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUE7UUFDNUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDRCx5Q0FBYyxHQUFkO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQ1osQ0FBQztZQUNDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFDRCxzQ0FBVyxHQUFYO1FBRUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFFLE1BQU07UUFFeEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUNoQixDQUFDO1lBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBN0NVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FLMEIsdUJBQWMsRUFBMkIseUJBQWdCLEVBQW9CLGtCQUFTLEVBQStCLHdCQUFpQixFQUFvQixvQ0FBZ0IsRUFBd0IsOEJBQWEsRUFBZ0IsV0FBSTtPQUpsUCxnQkFBZ0IsQ0E4QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0NoZWNrZWQsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaW5nbGV0b24tc2VydmljZS9zaW5nbGV0b24uc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvY2tldC1zZXJ2aWNlL3NvY2tldC5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoYXQtYm94JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC1ib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXRCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOiBhbnk7XG4gIG1lc3NhZ2UgPSBcIlwiO1xuICB1c2VyX2lkOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzaW5nbGV0b246IFNpbmdsZXRvblNlcnZpY2UsIHB1YmxpYyBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgIHRoaXMudXNlcl9pZCA9ICBwYXJhbXNbXCJfaWRcIl07XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5pbmcgdGhlIGNoYXRcIik7XG4gICAgdGhpcy51c2VyID0gdGhpcy5zb2NrZXRTZXJ2aWNlLnNlbGVjdGVkVXNlcnNbdGhpcy51c2VyX2lkXTtcbiAgICB0aGlzLnNvY2tldFNlcnZpY2UuZW1taXRGb2N1cyh7cm9vbV9pZDogdGhpcy51c2VyW1wicm9vbV9pZFwiXSwgdXBkYXRlQWxsOiBmYWxzZSwgc2VuZGVySWQ6IHRoaXMudXNlcltcIl9pZFwiXX0pXG4gICAgdGhpcy51c2VyW1wiY2hhdE9wZW5cIl0gPSB0cnVlO1xuICAgIHRoaXMuc29ja2V0U2VydmljZS5jaGFuZ2VFbWl0dGVkJC5zdWJzY3JpYmUoKCk9PntcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBzY3JvbGxUb0JvdHRvbSgpe1xuICAgIGlmICghdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmWydkZXN0cm95ZWQnXSkge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgdmFyIGxpc3RWaWV3ID0gPExpc3RWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZChcIm15U2Nyb2xsZXJcIik7XG4gICAgaWYobGlzdFZpZXcpXG4gICAge1xuICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleCh0aGlzLnVzZXJbXCJtZXNzYWdlc1wiXS5sZW5ndGgtMSk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KClcbiAge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRhY2goKTtcbiAgICB0aGlzLnVzZXJbXCJjaGF0T3BlblwiXSA9IGZhbHNlO1xuICB9XG4gIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG4gIHNlbmRNZXNzYWdlKHRvVXNlciwgcm9vbUlkKVxuICB7XG4gICAgaWYodGhpcy5tZXNzYWdlKVxuICAgIHtcbiAgICAgIHRoaXMuc29ja2V0U2VydmljZS5zZW5kTWVzc2FnZShbdGhpcy5tZXNzYWdlLCB0b1VzZXIsIHJvb21JZF0pO1xuICAgICAgdGhpcy5tZXNzYWdlPVwiXCI7XG4gICAgfVxuICB9XG59Il19