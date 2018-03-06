"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_functions_service_1 = require("../../services/common-functions-service/common-functions.service");
var singleton_service_1 = require("../../services/singleton-service/singleton.service");
var router_1 = require("nativescript-angular/router");
var socket_service_1 = require("../../services/socket-service/socket.service");
var page_1 = require("tns-core-modules/ui/page/page");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(page, routerExtensions, _changeDetectionRef, socketService, fb, cfs, singleton) {
        var _this = this;
        this.page = page;
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
            // é necessário forçar a atualização do array listUsers, pois existe um bug no IOS onde a listview não atualiza quando o array é atualizado por observables
            _this.listView.refresh();
        });
        if (this.socketService.listUsers.length) {
            this.listUsers = this.socketService.listUsers;
            this.loadingUsers = false;
        }
    }
    ChatComponent.prototype.ngAfterViewInit = function () {
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.listView = this.page.getViewById("myScroller");
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
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, core_1.ChangeDetectorRef, socket_service_1.SocketService, forms_1.FormBuilder, common_functions_service_1.CommonFunctionsService, singleton_service_1.SingletonService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvSDtBQUNwSCx3Q0FBOEY7QUFDOUYsNkdBQTBHO0FBQzFHLHdGQUFzRjtBQUN0RixzREFBK0Q7QUFDL0QsK0VBQTZFO0FBRTdFLHNEQUFxRDtBQVFyRDtJQVFFLHVCQUFvQixJQUFVLEVBQVUsZ0JBQWtDLEVBQVUsbUJBQXNDLEVBQVMsYUFBNEIsRUFBRSxFQUFnQixFQUFTLEdBQTRCLEVBQVMsU0FBMkI7UUFBMVAsaUJBb0JDO1FBcEJtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUEyQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSjFQLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUdsQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQ2xDLENBQUM7WUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUMvQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQzFCLENBQUM7Z0JBQ0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUVELDJKQUEySjtZQUMzSixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQ3ZDLENBQUM7WUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBM0JELHVDQUFlLEdBQWY7SUFDQSxDQUFDO0lBNEJELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXBDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQVMwQixXQUFJLEVBQTRCLHlCQUFnQixFQUErQix3QkFBaUIsRUFBd0IsOEJBQWEsRUFBTyxtQkFBVyxFQUFlLGlEQUFzQixFQUFvQixvQ0FBZ0I7T0FSL08sYUFBYSxDQXFDekI7SUFBRCxvQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbkZ1bmN0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21tb24tZnVuY3Rpb25zLXNlcnZpY2UvY29tbW9uLWZ1bmN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaW5nbGV0b24tc2VydmljZS9zaW5nbGV0b24uc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb2NrZXQtc2VydmljZS9zb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3L2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC1jb21tb24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuICBzb2NrZXQ6IGFueTtcbiAgc2VsZWN0ZWRVc2VycyA9IHt9O1xuICBsaXN0VXNlcnMgPSBbXTtcbiAgbG9hZGluZ1VzZXJzID0gdHJ1ZTtcbiAgbGlzdFZpZXc6IExpc3RWaWV3O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHNvY2tldFNlcnZpY2U6IFNvY2tldFNlcnZpY2UsIGZiIDogRm9ybUJ1aWxkZXIsIHB1YmxpYyBjZnMgOiBDb21tb25GdW5jdGlvbnNTZXJ2aWNlLCBwdWJsaWMgc2luZ2xldG9uOiBTaW5nbGV0b25TZXJ2aWNlICkgeyBcbiAgICBpZighdGhpcy5zb2NrZXRTZXJ2aWNlLmludGlhbGl6ZWQpXG4gICAge1xuICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcbiAgICB9XG4gICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmNoYW5nZVVzZXJzRW1pdHRlZCQuc3Vic2NyaWJlKCgpPT57XG4gICAgICBpZighdGhpcy5saXN0VXNlcnMubGVuZ3RoKVxuICAgICAge1xuICAgICAgICB0aGlzLmxpc3RVc2VycyA9IHRoaXMuc29ja2V0U2VydmljZS5saXN0VXNlcnM7XG4gICAgICAgIHRoaXMubG9hZGluZ1VzZXJzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIMOpIG5lY2Vzc8OhcmlvIGZvcsOnYXIgYSBhdHVhbGl6YcOnw6NvIGRvIGFycmF5IGxpc3RVc2VycywgcG9pcyBleGlzdGUgdW0gYnVnIG5vIElPUyBvbmRlIGEgbGlzdHZpZXcgbsOjbyBhdHVhbGl6YSBxdWFuZG8gbyBhcnJheSDDqSBhdHVhbGl6YWRvIHBvciBvYnNlcnZhYmxlc1xuICAgICAgdGhpcy5saXN0Vmlldy5yZWZyZXNoKCk7XG4gICAgfSlcbiAgICBpZih0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLmxpc3RVc2VycyA9IHRoaXMuc29ja2V0U2VydmljZS5saXN0VXNlcnM7XG4gICAgICB0aGlzLmxvYWRpbmdVc2VycyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdFZpZXcgPSA8TGlzdFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibXlTY3JvbGxlclwiKTtcbiAgfVxuXG4gIHNlbGVjdFVzZXIodXNlcil7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jaGF0Ym94XCIsdXNlci5faWRdKTtcbiAgfVxufVxuIl19