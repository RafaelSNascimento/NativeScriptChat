"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_functions_service_1 = require("./services/common-functions-service/common-functions.service");
var singleton_service_1 = require("./services/singleton-service/singleton.service");
var socket_service_1 = require("./services/socket-service/socket.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(cfs, singleton, socketService, router) {
        var _this = this;
        this.cfs = cfs;
        this.singleton = singleton;
        this.socketService = socketService;
        this.router = router;
        // verifico se existe token no localstorage, se tiver eu envio para o backend, em que me responde se o token é valido
        if (this.cfs.getToken()) {
            this.cfs.postObserver("/api/user/verify", this.cfs.getToken(), {})
                .subscribe(function (data) {
                // salvo o usuário retornado pelo backend no nosso singleton, para que seja utilizado em todo o sistema
                _this.singleton.user = data;
                // Inicio o socket( O socket se responsabiliza por receber eventos do servidor, como login de usuários, mensagens, etc..)
                _this.socketService.initSocket();
                // Envio o usuário para a tela do chat
                _this.router.navigate(['/chat']);
            }, function (error) {
                // se o token for inválido, envio o usuário para a tela de login/registro
                _this.router.navigate(['/login']);
            });
        }
        else {
            // Se não tiver localstorage, envio o usuário para a tela de login/registro
            this.router.navigate(['/login']);
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [common_functions_service_1.CommonFunctionsService, singleton_service_1.SingletonService, socket_service_1.SocketService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHlHQUFzRztBQUN0RyxvRkFBa0Y7QUFDbEYsMkVBQXlFO0FBTXpFO0lBQ0Usc0JBQW1CLEdBQTJCLEVBQVMsU0FBMkIsRUFBUSxhQUE0QixFQUFVLE1BQWM7UUFBOUksaUJBMkJDO1FBM0JrQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVEsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVJLHFIQUFxSDtRQUNySCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3hCLENBQUM7WUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDakUsU0FBUyxDQUFFLFVBQUEsSUFBSTtnQkFFZCx1R0FBdUc7Z0JBQ3ZHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFFM0IseUhBQXlIO2dCQUN6SCxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUVoQyxzQ0FBc0M7Z0JBQ3RDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUVILHlFQUF5RTtnQkFDekUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsMkVBQTJFO1lBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQTVCVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsMkNBQTJDO1NBQ3RELENBQUM7eUNBRXdCLGlEQUFzQixFQUFvQixvQ0FBZ0IsRUFBdUIsOEJBQWEsRUFBa0IsZUFBTTtPQURuSSxZQUFZLENBNkJ4QjtJQUFELG1CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29tbW9uRnVuY3Rpb25zU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbW1vbi1mdW5jdGlvbnMtc2VydmljZS9jb21tb24tZnVuY3Rpb25zLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNpbmdsZXRvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaW5nbGV0b24tc2VydmljZS9zaW5nbGV0b24uc2VydmljZVwiO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC1zZXJ2aWNlL3NvY2tldC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYWluXCIsXG4gIHRlbXBsYXRlOiBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNmczogQ29tbW9uRnVuY3Rpb25zU2VydmljZSwgcHVibGljIHNpbmdsZXRvbjogU2luZ2xldG9uU2VydmljZSxwdWJsaWMgc29ja2V0U2VydmljZTogU29ja2V0U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIC8vIHZlcmlmaWNvIHNlIGV4aXN0ZSB0b2tlbiBubyBsb2NhbHN0b3JhZ2UsIHNlIHRpdmVyIGV1IGVudmlvIHBhcmEgbyBiYWNrZW5kLCBlbSBxdWUgbWUgcmVzcG9uZGUgc2UgbyB0b2tlbiDDqSB2YWxpZG9cbiAgICBpZiAodGhpcy5jZnMuZ2V0VG9rZW4oKSlcbiAgICB7XG4gICAgICB0aGlzLmNmcy5wb3N0T2JzZXJ2ZXIoXCIvYXBpL3VzZXIvdmVyaWZ5XCIsIHRoaXMuY2ZzLmdldFRva2VuKCksIHt9KVxuICAgICAgLnN1YnNjcmliZSggZGF0YT0+XG4gICAgICB7XG4gICAgICAgIC8vIHNhbHZvIG8gdXN1w6FyaW8gcmV0b3JuYWRvIHBlbG8gYmFja2VuZCBubyBub3NzbyBzaW5nbGV0b24sIHBhcmEgcXVlIHNlamEgdXRpbGl6YWRvIGVtIHRvZG8gbyBzaXN0ZW1hXG4gICAgICAgIHRoaXMuc2luZ2xldG9uLnVzZXIgPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pY2lvIG8gc29ja2V0KCBPIHNvY2tldCBzZSByZXNwb25zYWJpbGl6YSBwb3IgcmVjZWJlciBldmVudG9zIGRvIHNlcnZpZG9yLCBjb21vIGxvZ2luIGRlIHVzdcOhcmlvcywgbWVuc2FnZW5zLCBldGMuLilcbiAgICAgICAgdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcblxuICAgICAgICAvLyBFbnZpbyBvIHVzdcOhcmlvIHBhcmEgYSB0ZWxhIGRvIGNoYXRcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hhdCddKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcj0+XG4gICAgICB7XG4gICAgICAgIC8vIHNlIG8gdG9rZW4gZm9yIGludsOhbGlkbywgZW52aW8gbyB1c3XDoXJpbyBwYXJhIGEgdGVsYSBkZSBsb2dpbi9yZWdpc3Ryb1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAvLyBTZSBuw6NvIHRpdmVyIGxvY2Fsc3RvcmFnZSwgZW52aW8gbyB1c3XDoXJpbyBwYXJhIGEgdGVsYSBkZSBsb2dpbi9yZWdpc3Ryb1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgfVxuICB9XG59XG4iXX0=