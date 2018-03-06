"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SingletonService = /** @class */ (function () {
    function SingletonService() {
        //Coloque aqui o ip do servidor
        this.serverUrl = "http://192.168.1.42:3000";
        this.forms = [];
        this.listUserChat = [];
        this.chatBadge = 0;
        console.log("intializing singleton");
    }
    Object.defineProperty(SingletonService.prototype, "user", {
        get: function () {
            return this.userLogged;
        },
        set: function (v) {
            this.userLogged = v;
        },
        enumerable: true,
        configurable: true
    });
    SingletonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SingletonService);
    return SingletonService;
}());
exports.SingletonService = SingletonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQztJQVFFO1FBUEEsK0JBQStCO1FBQy9CLGNBQVMsR0FBVywwQkFBMEIsQ0FBQztRQUMvQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUtaLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JBQVcsa0NBQUk7YUFBZjtZQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFnQixDQUFPO1lBRXJCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7OztPQUxBO0lBaEJVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFOztPQUNBLGdCQUFnQixDQXVCNUI7SUFBRCx1QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25TZXJ2aWNlIHtcbiAgLy9Db2xvcXVlIGFxdWkgbyBpcCBkbyBzZXJ2aWRvclxuICBzZXJ2ZXJVcmw6IHN0cmluZyA9IFwiaHR0cDovLzE5Mi4xNjguMS40MjozMDAwXCI7XG4gIGZvcm1zID0gW107XG4gIGxpc3RVc2VyQ2hhdCA9IFtdO1xuICBjaGF0QmFkZ2UgPSAwO1xuICB1c2VyTG9nZ2VkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSBcbiAge1xuICAgIGNvbnNvbGUubG9nKFwiaW50aWFsaXppbmcgc2luZ2xldG9uXCIpO1xuICB9XG5cbiAgcHVibGljIGdldCB1c2VyKCkgOiBhbnkgXG4gIHtcbiAgICByZXR1cm4gdGhpcy51c2VyTG9nZ2VkO1xuICB9XG4gIFxuICBwdWJsaWMgc2V0IHVzZXIodiA6IGFueSkgXG4gIHtcbiAgICB0aGlzLnVzZXJMb2dnZWQgPSB2O1xuICB9XG4gIFxufVxuIl19