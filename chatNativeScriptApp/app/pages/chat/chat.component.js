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
        console.log("here");
        if (!this.socketService.intialized) {
            this.socketService.initSocket();
        }
        this.socketService.changeUsersEmitted$.subscribe(function () {
            if (!_this.listUsers.length) {
                _this.listUsers = _this.socketService.listUsers;
                _this.loadingUsers = false;
            }
            if (!_this._changeDetectionRef['destroyed']) {
                _this._changeDetectionRef.detectChanges();
            }
            // é necessário forçar a atualização do array listUsers, pois existe um bug no IOS onde a listview não atualiza quando o array é atualizado por observables
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUNwSCx3Q0FBOEY7QUFDOUYsNkdBQTBHO0FBQzFHLHdGQUFzRjtBQUN0RixzREFBK0Q7QUFDL0QsK0VBQTZFO0FBUTdFO0lBT0UsdUJBQW9CLGdCQUFrQyxFQUFVLG1CQUFzQyxFQUFTLGFBQTRCLEVBQUUsRUFBZ0IsRUFBUyxHQUE0QixFQUFTLFNBQTJCO1FBQXRPLGlCQXdCQztRQXhCbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUEyQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSHRPLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FDbEMsQ0FBQztZQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FDMUIsQ0FBQztnQkFDQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO2dCQUM5QyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM1QixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0MsQ0FBQztZQUNELDJKQUEySjtZQUMzSixLQUFJLENBQUMsU0FBUyxHQUFPLEtBQUksQ0FBQyxTQUFTLFFBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUN2QyxDQUFDO1lBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7SUE5QkQsdUNBQWUsR0FBZjtJQUNBLENBQUM7SUErQkQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXRDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQVFzQyx5QkFBZ0IsRUFBK0Isd0JBQWlCLEVBQXdCLDhCQUFhLEVBQU8sbUJBQVcsRUFBZSxpREFBc0IsRUFBb0Isb0NBQWdCO09BUDNOLGFBQWEsQ0F1Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25GdW5jdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tbW9uLWZ1bmN0aW9ucy1zZXJ2aWNlL2NvbW1vbi1mdW5jdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2luZ2xldG9uLXNlcnZpY2Uvc2luZ2xldG9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29ja2V0LXNlcnZpY2Uvc29ja2V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC1jb21tb24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuICBzb2NrZXQ6IGFueTtcbiAgc2VsZWN0ZWRVc2VycyA9IHt9O1xuICBsaXN0VXNlcnMgPSBbXTtcbiAgbG9hZGluZ1VzZXJzID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc29ja2V0U2VydmljZTogU29ja2V0U2VydmljZSwgZmIgOiBGb3JtQnVpbGRlciwgcHVibGljIGNmcyA6IENvbW1vbkZ1bmN0aW9uc1NlcnZpY2UsIHB1YmxpYyBzaW5nbGV0b246IFNpbmdsZXRvblNlcnZpY2UgKSB7IFxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICBpZighdGhpcy5zb2NrZXRTZXJ2aWNlLmludGlhbGl6ZWQpXG4gICAge1xuICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcbiAgICB9XG4gICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmNoYW5nZVVzZXJzRW1pdHRlZCQuc3Vic2NyaWJlKCgpPT57XG4gICAgICBpZighdGhpcy5saXN0VXNlcnMubGVuZ3RoKVxuICAgICAge1xuICAgICAgICB0aGlzLmxpc3RVc2VycyA9IHRoaXMuc29ja2V0U2VydmljZS5saXN0VXNlcnM7XG4gICAgICAgIHRoaXMubG9hZGluZ1VzZXJzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2NoYW5nZURldGVjdGlvblJlZlsnZGVzdHJveWVkJ10pIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICAgIC8vIMOpIG5lY2Vzc8OhcmlvIGZvcsOnYXIgYSBhdHVhbGl6YcOnw6NvIGRvIGFycmF5IGxpc3RVc2VycywgcG9pcyBleGlzdGUgdW0gYnVnIG5vIElPUyBvbmRlIGEgbGlzdHZpZXcgbsOjbyBhdHVhbGl6YSBxdWFuZG8gbyBhcnJheSDDqSBhdHVhbGl6YWRvIHBvciBvYnNlcnZhYmxlc1xuICAgICAgdGhpcy5saXN0VXNlcnMgPSBbLi4udGhpcy5saXN0VXNlcnNdO1xuICAgIH0pXG4gICAgaWYodGhpcy5zb2NrZXRTZXJ2aWNlLmxpc3RVc2Vycy5sZW5ndGgpXG4gICAge1xuICAgICAgdGhpcy5saXN0VXNlcnMgPSB0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzO1xuICAgICAgdGhpcy5sb2FkaW5nVXNlcnMgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZWxlY3RVc2VyKHVzZXIpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2hhdGJveFwiLHVzZXIuX2lkXSk7XG4gIH1cbn1cbiJdfQ==