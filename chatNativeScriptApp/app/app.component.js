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
            console.log("have token..");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHlHQUFzRztBQUN0RyxvRkFBa0Y7QUFDbEYsMkVBQXlFO0FBTXpFO0lBQ0Usc0JBQW1CLEdBQTJCLEVBQVMsU0FBMkIsRUFBUSxhQUE0QixFQUFVLE1BQWM7UUFBOUksaUJBNEJDO1FBNUJrQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVEsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVJLHFIQUFxSDtRQUNySCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3hCLENBQUM7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUNqRSxTQUFTLENBQUUsVUFBQSxJQUFJO2dCQUVkLHVHQUF1RztnQkFDdkcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUUzQix5SEFBeUg7Z0JBQ3pILEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBRWhDLHNDQUFzQztnQkFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBRUgseUVBQXlFO2dCQUN6RSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQywyRUFBMkU7WUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBN0JVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQzt5Q0FFd0IsaURBQXNCLEVBQW9CLG9DQUFnQixFQUF1Qiw4QkFBYSxFQUFrQixlQUFNO09BRG5JLFlBQVksQ0E4QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDb21tb25GdW5jdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29tbW9uLWZ1bmN0aW9ucy1zZXJ2aWNlL2NvbW1vbi1mdW5jdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgU2luZ2xldG9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NpbmdsZXRvbi1zZXJ2aWNlL3NpbmdsZXRvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc29ja2V0LXNlcnZpY2Uvc29ja2V0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1haW5cIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2ZzOiBDb21tb25GdW5jdGlvbnNTZXJ2aWNlLCBwdWJsaWMgc2luZ2xldG9uOiBTaW5nbGV0b25TZXJ2aWNlLHB1YmxpYyBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgLy8gdmVyaWZpY28gc2UgZXhpc3RlIHRva2VuIG5vIGxvY2Fsc3RvcmFnZSwgc2UgdGl2ZXIgZXUgZW52aW8gcGFyYSBvIGJhY2tlbmQsIGVtIHF1ZSBtZSByZXNwb25kZSBzZSBvIHRva2VuIMOpIHZhbGlkb1xuICAgIGlmICh0aGlzLmNmcy5nZXRUb2tlbigpKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGF2ZSB0b2tlbi4uXCIpO1xuICAgICAgdGhpcy5jZnMucG9zdE9ic2VydmVyKFwiL2FwaS91c2VyL3ZlcmlmeVwiLCB0aGlzLmNmcy5nZXRUb2tlbigpLCB7fSlcbiAgICAgIC5zdWJzY3JpYmUoIGRhdGE9PlxuICAgICAge1xuICAgICAgICAvLyBzYWx2byBvIHVzdcOhcmlvIHJldG9ybmFkbyBwZWxvIGJhY2tlbmQgbm8gbm9zc28gc2luZ2xldG9uLCBwYXJhIHF1ZSBzZWphIHV0aWxpemFkbyBlbSB0b2RvIG8gc2lzdGVtYVxuICAgICAgICB0aGlzLnNpbmdsZXRvbi51c2VyID0gZGF0YTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaWNpbyBvIHNvY2tldCggTyBzb2NrZXQgc2UgcmVzcG9uc2FiaWxpemEgcG9yIHJlY2ViZXIgZXZlbnRvcyBkbyBzZXJ2aWRvciwgY29tbyBsb2dpbiBkZSB1c3XDoXJpb3MsIG1lbnNhZ2VucywgZXRjLi4pXG4gICAgICAgIHRoaXMuc29ja2V0U2VydmljZS5pbml0U29ja2V0KCk7XG5cbiAgICAgICAgLy8gRW52aW8gbyB1c3XDoXJpbyBwYXJhIGEgdGVsYSBkbyBjaGF0XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYXQnXSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I9PlxuICAgICAge1xuICAgICAgICAvLyBzZSBvIHRva2VuIGZvciBpbnbDoWxpZG8sIGVudmlvIG8gdXN1w6FyaW8gcGFyYSBhIHRlbGEgZGUgbG9naW4vcmVnaXN0cm9cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy8gU2UgbsOjbyB0aXZlciBsb2NhbHN0b3JhZ2UsIGVudmlvIG8gdXN1w6FyaW8gcGFyYSBhIHRlbGEgZGUgbG9naW4vcmVnaXN0cm9cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIH1cbiAgfVxufVxuIl19