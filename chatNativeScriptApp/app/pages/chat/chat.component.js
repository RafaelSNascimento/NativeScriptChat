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
        if (!this.socketService.listUsers.length) {
            this.socketService.changeUsersEmitted$.subscribe(function () {
                _this.listUsers = _this.socketService.listUsers;
                _this.loadingUsers = false;
                _this._changeDetectionRef.detectChanges();
            });
        }
        else {
            this.listUsers = this.socketService.listUsers;
            this.loadingUsers = false;
            this._changeDetectionRef.detectChanges();
        }
    }
    ChatComponent.prototype.ngAfterViewInit = function () {
        this._changeDetectionRef.detectChanges();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUNwSCx3Q0FBOEY7QUFDOUYsNkdBQTBHO0FBQzFHLHdGQUFzRjtBQUN0RixzREFBK0Q7QUFDL0QsK0VBQTZFO0FBUTdFO0lBUUUsdUJBQW9CLGdCQUFrQyxFQUFVLG1CQUFzQyxFQUFTLGFBQTRCLEVBQUUsRUFBZ0IsRUFBUyxHQUE0QixFQUFTLFNBQTJCO1FBQXRPLGlCQW1CQztRQW5CbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUEyQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSHRPLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVsQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQ2xDLENBQUM7WUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUN4QyxDQUFDO1lBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7Z0JBQzlDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixLQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQTFCRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUEwQkQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQWxDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQVNzQyx5QkFBZ0IsRUFBK0Isd0JBQWlCLEVBQXdCLDhCQUFhLEVBQU8sbUJBQVcsRUFBZSxpREFBc0IsRUFBb0Isb0NBQWdCO09BUjNOLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25GdW5jdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tbW9uLWZ1bmN0aW9ucy1zZXJ2aWNlL2NvbW1vbi1mdW5jdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2luZ2xldG9uLXNlcnZpY2Uvc2luZ2xldG9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29ja2V0LXNlcnZpY2Uvc29ja2V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC1jb21tb24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHNvY2tldDogYW55O1xuICBzZWxlY3RlZFVzZXJzID0ge307XG4gIGxpc3RVc2VycyA9IFtdO1xuICBsb2FkaW5nVXNlcnMgPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlLCBmYiA6IEZvcm1CdWlsZGVyLCBwdWJsaWMgY2ZzIDogQ29tbW9uRnVuY3Rpb25zU2VydmljZSwgcHVibGljIHNpbmdsZXRvbjogU2luZ2xldG9uU2VydmljZSApIHsgXG4gICAgaWYoIXRoaXMuc29ja2V0U2VydmljZS5pbnRpYWxpemVkKVxuICAgIHtcbiAgICAgIHRoaXMuc29ja2V0U2VydmljZS5pbml0U29ja2V0KCk7XG4gICAgfVxuICAgIGlmKCF0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLnNvY2tldFNlcnZpY2UuY2hhbmdlVXNlcnNFbWl0dGVkJC5zdWJzY3JpYmUoKCk9PntcbiAgICAgICAgdGhpcy5saXN0VXNlcnMgPSB0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzO1xuICAgICAgICB0aGlzLmxvYWRpbmdVc2VycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMubGlzdFVzZXJzID0gdGhpcy5zb2NrZXRTZXJ2aWNlLmxpc3RVc2VycztcbiAgICAgIHRoaXMubG9hZGluZ1VzZXJzID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VsZWN0VXNlcih1c2VyKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NoYXRib3hcIix1c2VyLl9pZF0pO1xuICB9XG59XG4iXX0=