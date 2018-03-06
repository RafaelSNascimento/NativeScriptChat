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
    function ChatComponent(page, routerExtensions, socketService, fb, cfs, singleton) {
        var _this = this;
        this.page = page;
        this.routerExtensions = routerExtensions;
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
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, socket_service_1.SocketService, forms_1.FormBuilder, common_functions_service_1.CommonFunctionsService, singleton_service_1.SingletonService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUNsRix3Q0FBOEY7QUFDOUYsNkdBQTBHO0FBQzFHLHdGQUFzRjtBQUN0RixzREFBK0Q7QUFDL0QsK0VBQTZFO0FBRTdFLHNEQUFxRDtBQVFyRDtJQU1FLHVCQUFvQixJQUFVLEVBQVUsZ0JBQWtDLEVBQVMsYUFBNEIsRUFBRSxFQUFnQixFQUFTLEdBQTRCLEVBQVMsU0FBMkI7UUFBMU0saUJBcUJDO1FBckJtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQTJCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFKMU0sa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBSWxCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FDbEMsQ0FBQztZQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FDMUIsQ0FBQztnQkFDQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO2dCQUM5QyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM1QixDQUFDO1lBRUQsMkpBQTJKO1lBQzNKLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FDdkMsQ0FBQztZQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFuQ1UsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FPMEIsV0FBSSxFQUE0Qix5QkFBZ0IsRUFBd0IsOEJBQWEsRUFBTyxtQkFBVyxFQUFlLGlEQUFzQixFQUFvQixvQ0FBZ0I7T0FOL0wsYUFBYSxDQW9DekI7SUFBRCxvQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uRnVuY3Rpb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbW1vbi1mdW5jdGlvbnMtc2VydmljZS9jb21tb24tZnVuY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2luZ2xldG9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NpbmdsZXRvbi1zZXJ2aWNlL3NpbmdsZXRvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvY2tldC1zZXJ2aWNlL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcvbGlzdC12aWV3JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jaGF0JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWNvbW1vbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc29ja2V0OiBhbnk7XG4gIHNlbGVjdGVkVXNlcnMgPSB7fTtcbiAgbGlzdFVzZXJzID0gW107XG4gIGxvYWRpbmdVc2VycyA9IHRydWU7XG4gIGxpc3RWaWV3OiBMaXN0VmlldztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHB1YmxpYyBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlLCBmYiA6IEZvcm1CdWlsZGVyLCBwdWJsaWMgY2ZzIDogQ29tbW9uRnVuY3Rpb25zU2VydmljZSwgcHVibGljIHNpbmdsZXRvbjogU2luZ2xldG9uU2VydmljZSApIHsgXG5cbiAgICBpZighdGhpcy5zb2NrZXRTZXJ2aWNlLmludGlhbGl6ZWQpXG4gICAge1xuICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcbiAgICB9XG4gICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmNoYW5nZVVzZXJzRW1pdHRlZCQuc3Vic2NyaWJlKCgpPT57XG4gICAgICBpZighdGhpcy5saXN0VXNlcnMubGVuZ3RoKVxuICAgICAge1xuICAgICAgICB0aGlzLmxpc3RVc2VycyA9IHRoaXMuc29ja2V0U2VydmljZS5saXN0VXNlcnM7XG4gICAgICAgIHRoaXMubG9hZGluZ1VzZXJzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIMOpIG5lY2Vzc8OhcmlvIGZvcsOnYXIgYSBhdHVhbGl6YcOnw6NvIGRvIGFycmF5IGxpc3RVc2VycywgcG9pcyBleGlzdGUgdW0gYnVnIG5vIElPUyBvbmRlIGEgbGlzdHZpZXcgbsOjbyBhdHVhbGl6YSBxdWFuZG8gbyBhcnJheSDDqSBhdHVhbGl6YWRvIHBvciBvYnNlcnZhYmxlc1xuICAgICAgdGhpcy5saXN0Vmlldy5yZWZyZXNoKCk7XG4gICAgfSlcbiAgICBpZih0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLmxpc3RVc2VycyA9IHRoaXMuc29ja2V0U2VydmljZS5saXN0VXNlcnM7XG4gICAgICB0aGlzLmxvYWRpbmdVc2VycyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdFZpZXcgPSA8TGlzdFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibXlTY3JvbGxlclwiKTtcbiAgfVxuXG4gIHNlbGVjdFVzZXIodXNlcil7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jaGF0Ym94XCIsdXNlci5faWRdKTtcbiAgfVxufVxuIl19