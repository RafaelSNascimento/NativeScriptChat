"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SingletonService = /** @class */ (function () {
    function SingletonService() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGV0b24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQztJQU9FO1FBTkEsY0FBUyxHQUFXLDBCQUEwQixDQUFDO1FBQy9DLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBS1osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQkFBVyxrQ0FBSTthQUFmO1lBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWdCLENBQU87WUFFckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQzs7O09BTEE7SUFmVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0FzQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2luZ2xldG9uU2VydmljZSB7XG4gIHNlcnZlclVybDogc3RyaW5nID0gXCJodHRwOi8vMTkyLjE2OC4xLjQyOjMwMDBcIjtcbiAgZm9ybXMgPSBbXTtcbiAgbGlzdFVzZXJDaGF0ID0gW107XG4gIGNoYXRCYWRnZSA9IDA7XG4gIHVzZXJMb2dnZWQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIFxuICB7XG4gICAgY29uc29sZS5sb2coXCJpbnRpYWxpemluZyBzaW5nbGV0b25cIik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVzZXIoKSA6IGFueSBcbiAge1xuICAgIHJldHVybiB0aGlzLnVzZXJMb2dnZWQ7XG4gIH1cbiAgXG4gIHB1YmxpYyBzZXQgdXNlcih2IDogYW55KSBcbiAge1xuICAgIHRoaXMudXNlckxvZ2dlZCA9IHY7XG4gIH1cbiAgXG59XG4iXX0=