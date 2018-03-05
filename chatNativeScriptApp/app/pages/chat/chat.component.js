"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_functions_service_1 = require("../../services/common-functions-service/common-functions.service");
var singleton_service_1 = require("../../services/singleton-service/singleton.service");
var router_1 = require("nativescript-angular/router");
var socket_service_1 = require("../../services/socket-service/socket.service");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(routerExtensions, _changeDetectionRef, socketService, fb, cfs, singleton) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this._changeDetectionRef = _changeDetectionRef;
        this.socketService = socketService;
        this.cfs = cfs;
        this.singleton = singleton;
        this.selectedUsers = {};
        this.listUsers = [];
        this.loadingUsers = true;
        if (!this.socketService.intialized) {
            this.socketService.initSocket();
        }
        this.socketService.changeUsersEmitted$.subscribe(function () {
            if (!_this.listUsers.length) {
                _this.listUsers = _this.socketService.listUsers;
                _this.loadingUsers = false;
            }
            _this._changeDetectionRef.detectChanges();
            _this.listUsers = _this.listUsers.slice();
        });
        if (this.socketService.listUsers.length) {
            this.listUsers = this.socketService.listUsers;
            this.loadingUsers = false;
            this._changeDetectionRef.detectChanges();
        }
    }
    ChatComponent.prototype.ngAfterViewInit = function () {
    };
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.selectUser = function (user) {
        this.routerExtensions.navigate(["/chatbox", user._id]);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            moduleId: module.id,
            templateUrl: './chat.component.html',
            styleUrls: ['./chat-common.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_1.ChangeDetectorRef, socket_service_1.SocketService, forms_1.FormBuilder, common_functions_service_1.CommonFunctionsService, singleton_service_1.SingletonService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUNwSCx3Q0FBOEY7QUFDOUYsNkdBQTBHO0FBQzFHLHdGQUFzRjtBQUN0RixzREFBK0Q7QUFDL0QsK0VBQTZFO0FBUTdFO0lBT0UsdUJBQW9CLGdCQUFrQyxFQUFVLG1CQUFzQyxFQUFTLGFBQTRCLEVBQUUsRUFBZ0IsRUFBUyxHQUE0QixFQUFTLFNBQTJCO1FBQXRPLGlCQW9CQztRQXBCbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUEyQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSHRPLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVsQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQ2xDLENBQUM7WUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUMvQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQzFCLENBQUM7Z0JBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FDdkMsQ0FBQztZQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBMUJELHVDQUFlLEdBQWY7SUFDQSxDQUFDO0lBMkJELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFsQ1UsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FRc0MseUJBQWdCLEVBQStCLHdCQUFpQixFQUF3Qiw4QkFBYSxFQUFPLG1CQUFXLEVBQWUsaURBQXNCLEVBQW9CLG9DQUFnQjtPQVAzTixhQUFhLENBbUN6QjtJQUFELG9CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uRnVuY3Rpb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbW1vbi1mdW5jdGlvbnMtc2VydmljZS9jb21tb24tZnVuY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2luZ2xldG9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NpbmdsZXRvbi1zZXJ2aWNlL3NpbmdsZXRvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvY2tldC1zZXJ2aWNlL3NvY2tldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoYXQnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXQtY29tbW9uLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cbiAgc29ja2V0OiBhbnk7XG4gIHNlbGVjdGVkVXNlcnMgPSB7fTtcbiAgbGlzdFVzZXJzID0gW107XG4gIGxvYWRpbmdVc2VycyA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHNvY2tldFNlcnZpY2U6IFNvY2tldFNlcnZpY2UsIGZiIDogRm9ybUJ1aWxkZXIsIHB1YmxpYyBjZnMgOiBDb21tb25GdW5jdGlvbnNTZXJ2aWNlLCBwdWJsaWMgc2luZ2xldG9uOiBTaW5nbGV0b25TZXJ2aWNlICkgeyBcbiAgICBpZighdGhpcy5zb2NrZXRTZXJ2aWNlLmludGlhbGl6ZWQpXG4gICAge1xuICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcbiAgICB9XG4gICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmNoYW5nZVVzZXJzRW1pdHRlZCQuc3Vic2NyaWJlKCgpPT57XG4gICAgICBpZighdGhpcy5saXN0VXNlcnMubGVuZ3RoKVxuICAgICAge1xuICAgICAgICB0aGlzLmxpc3RVc2VycyA9IHRoaXMuc29ja2V0U2VydmljZS5saXN0VXNlcnM7XG4gICAgICAgIHRoaXMubG9hZGluZ1VzZXJzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5saXN0VXNlcnMgPSB0aGlzLmxpc3RVc2Vycy5zbGljZSgpO1xuICAgIH0pXG4gICAgaWYodGhpcy5zb2NrZXRTZXJ2aWNlLmxpc3RVc2Vycy5sZW5ndGgpXG4gICAge1xuICAgICAgdGhpcy5saXN0VXNlcnMgPSB0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzO1xuICAgICAgdGhpcy5sb2FkaW5nVXNlcnMgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZWxlY3RVc2VyKHVzZXIpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2hhdGJveFwiLHVzZXIuX2lkXSk7XG4gIH1cbn1cbiJdfQ==