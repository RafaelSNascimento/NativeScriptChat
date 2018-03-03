"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_functions_service_1 = require("../common-functions-service/common-functions.service");
require("rxjs/add/operator/switchMap");
var socket_service_1 = require("../socket-service/socket.service");
var UserChatService = /** @class */ (function () {
    function UserChatService(ngZone, cfs, socketService) {
        this.ngZone = ngZone;
        this.cfs = cfs;
        this.socketService = socketService;
        this.selectedUsers = {};
        this.listUsers = [];
    }
    UserChatService.prototype.resolve = function (route) {
        var _this = this;
        // pegamos o parâmetro do usuário selecionado da rota
        this._id = route.params._id;
        console.log("user selected id:" + this._id);
        // criamos a promise responsável por avisar que os dados foram alimentados e que pode carregar a view chatbox
        return new Promise(function (resolve) {
            // verifico se o usuário ja foi selecionado alguma vez, para que eu não faça requisições desnecessárias ao servidor
            if (!_this.socketService.selectedUsers[_this._id]) {
                // como o usuário ainda não foi selecionado, precisamos varrer a lista dos usuários(listUsers) disponiveis e pegar o usuário que desejamos conversar
                for (var i = 0; i < _this.socketService.listUsers.length; i++) {
                    // se o id do usuário do indice "i" for igual ao id que pegamos pela rota, chegamos a conclusão que esse é o usuário desejado
                    if (_this.socketService.listUsers[i]["_id"] == _this._id) {
                        // OBS: precisamos rodar isso dentro do angular, pois existe um BUG onde o socket roda fóra do angular
                        _this.ngZone.run(function () {
                            // passamos o usuário para a lista de usuários selecionados(selectedUsers)
                            _this.socketService.selectedUsers[_this._id] = _this.socketService.listUsers[i];
                            // Tornamos true a flag responsavel por nos dizer se o chat do usuário selecionado está aberto ou não
                            // a flag será responsável por incrementar a badge do chat e disparar o visto das mensagens
                            _this.socketService.selectedUsers[_this._id]["chatOpen"] = true;
                            console.log("selecting user...");
                            // chamamos uma função do socketService "emmitSelect", onde o mesmo retorna uma promise.
                            return resolve(_this.socketService.emmitSelect(_this._id));
                        });
                        break;
                    }
                }
            }
            else {
                _this.ngZone.run(function () {
                    _this.socketService.selectedUsers[_this._id]["chatOpen"] = true;
                    return resolve(true);
                });
            }
        });
    };
    UserChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone, common_functions_service_1.CommonFunctionsService, socket_service_1.SocketService])
    ], UserChatService);
    return UserChatService;
}());
exports.UserChatService = UserChatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNoYXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJDaGF0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBaUU7QUFJakUsaUdBQThGO0FBRzlGLHVDQUFxQztBQUNyQyxtRUFBaUU7QUFFakU7SUFJSSx5QkFBb0IsTUFBYSxFQUFTLEdBQTJCLEVBQVUsYUFBNEI7UUFBdkYsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFTLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFIM0csa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUUrRixDQUFDO0lBQy9HLGlDQUFPLEdBQVAsVUFBUSxLQUE2QjtRQUFyQyxpQkEyQ0M7UUExQ0cscURBQXFEO1FBQ3JELElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUMsNkdBQTZHO1FBQzdHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsbUhBQW1IO1lBQ25ILEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQy9DLENBQUM7Z0JBQ0csb0pBQW9KO2dCQUNwSixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO29CQUV0RCw2SEFBNkg7b0JBQzdILEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FDdEQsQ0FBQzt3QkFDRCxzR0FBc0c7d0JBQ3RHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOzRCQUVaLDBFQUEwRTs0QkFDMUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUU3RSxxR0FBcUc7NEJBQ3JHLDJGQUEyRjs0QkFDM0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzRCQUVqQyx3RkFBd0Y7NEJBQ3hGLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzdELENBQUMsQ0FBQyxDQUFBO3dCQUNGLEtBQUssQ0FBQztvQkFDTixDQUFDO2dCQUNMLENBQUM7WUFFTCxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0csS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ1osS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBaERRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLa0IsYUFBTSxFQUFjLGlEQUFzQixFQUF5Qiw4QkFBYTtPQUpsRyxlQUFlLENBaUQzQjtJQUFELHNCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAqIGFzIFNvY2tldElPIGZyb20gXCJuYXRpdmVzY3JpcHQtc29ja2V0LmlvXCI7XG5pbXBvcnQgeyBTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnLi4vc2luZ2xldG9uLXNlcnZpY2Uvc2luZ2xldG9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uRnVuY3Rpb25zU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi1mdW5jdGlvbnMtc2VydmljZS9jb21tb24tZnVuY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc29ja2V0LXNlcnZpY2Uvc29ja2V0LnNlcnZpY2UnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJDaGF0U2VydmljZSBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG4gICAgc2VsZWN0ZWRVc2VycyA9IHt9O1xuICAgIGxpc3RVc2VycyA9IFtdO1xuICAgIF9pZDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTpOZ1pvbmUsIHB1YmxpYyBjZnM6IENvbW1vbkZ1bmN0aW9uc1NlcnZpY2UsIHByaXZhdGUgc29ja2V0U2VydmljZTogU29ja2V0U2VydmljZSkge31cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgLy8gcGVnYW1vcyBvIHBhcsOibWV0cm8gZG8gdXN1w6FyaW8gc2VsZWNpb25hZG8gZGEgcm90YVxuICAgICAgICB0aGlzLl9pZCA9IHJvdXRlLnBhcmFtcy5faWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBzZWxlY3RlZCBpZDpcIit0aGlzLl9pZCk7XG5cbiAgICAgICAgLy8gY3JpYW1vcyBhIHByb21pc2UgcmVzcG9uc8OhdmVsIHBvciBhdmlzYXIgcXVlIG9zIGRhZG9zIGZvcmFtIGFsaW1lbnRhZG9zIGUgcXVlIHBvZGUgY2FycmVnYXIgYSB2aWV3IGNoYXRib3hcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmU9PntcbiAgICAgICAgICAgIC8vIHZlcmlmaWNvIHNlIG8gdXN1w6FyaW8gamEgZm9pIHNlbGVjaW9uYWRvIGFsZ3VtYSB2ZXosIHBhcmEgcXVlIGV1IG7Do28gZmHDp2EgcmVxdWlzacOnw7VlcyBkZXNuZWNlc3PDoXJpYXMgYW8gc2Vydmlkb3JcbiAgICAgICAgICAgIGlmKCF0aGlzLnNvY2tldFNlcnZpY2Uuc2VsZWN0ZWRVc2Vyc1t0aGlzLl9pZF0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29tbyBvIHVzdcOhcmlvIGFpbmRhIG7Do28gZm9pIHNlbGVjaW9uYWRvLCBwcmVjaXNhbW9zIHZhcnJlciBhIGxpc3RhIGRvcyB1c3XDoXJpb3MobGlzdFVzZXJzKSBkaXNwb25pdmVpcyBlIHBlZ2FyIG8gdXN1w6FyaW8gcXVlIGRlc2VqYW1vcyBjb252ZXJzYXJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwgdGhpcy5zb2NrZXRTZXJ2aWNlLmxpc3RVc2Vycy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2UgbyBpZCBkbyB1c3XDoXJpbyBkbyBpbmRpY2UgXCJpXCIgZm9yIGlndWFsIGFvIGlkIHF1ZSBwZWdhbW9zIHBlbGEgcm90YSwgY2hlZ2Ftb3MgYSBjb25jbHVzw6NvIHF1ZSBlc3NlIMOpIG8gdXN1w6FyaW8gZGVzZWphZG9cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zb2NrZXRTZXJ2aWNlLmxpc3RVc2Vyc1tpXVtcIl9pZFwiXSA9PSB0aGlzLl9pZClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBPQlM6IHByZWNpc2Ftb3Mgcm9kYXIgaXNzbyBkZW50cm8gZG8gYW5ndWxhciwgcG9pcyBleGlzdGUgdW0gQlVHIG9uZGUgbyBzb2NrZXQgcm9kYSBmw7NyYSBkbyBhbmd1bGFyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXNzYW1vcyBvIHVzdcOhcmlvIHBhcmEgYSBsaXN0YSBkZSB1c3XDoXJpb3Mgc2VsZWNpb25hZG9zKHNlbGVjdGVkVXNlcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2Uuc2VsZWN0ZWRVc2Vyc1t0aGlzLl9pZF0gPSB0aGlzLnNvY2tldFNlcnZpY2UubGlzdFVzZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb3JuYW1vcyB0cnVlIGEgZmxhZyByZXNwb25zYXZlbCBwb3Igbm9zIGRpemVyIHNlIG8gY2hhdCBkbyB1c3XDoXJpbyBzZWxlY2lvbmFkbyBlc3TDoSBhYmVydG8gb3UgbsOjb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBmbGFnIHNlcsOhIHJlc3BvbnPDoXZlbCBwb3IgaW5jcmVtZW50YXIgYSBiYWRnZSBkbyBjaGF0IGUgZGlzcGFyYXIgbyB2aXN0byBkYXMgbWVuc2FnZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldFNlcnZpY2Uuc2VsZWN0ZWRVc2Vyc1t0aGlzLl9pZF1bXCJjaGF0T3BlblwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGluZyB1c2VyLi4uXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGFtYW1vcyB1bWEgZnVuw6fDo28gZG8gc29ja2V0U2VydmljZSBcImVtbWl0U2VsZWN0XCIsIG9uZGUgbyBtZXNtbyByZXRvcm5hIHVtYSBwcm9taXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy5zb2NrZXRTZXJ2aWNlLmVtbWl0U2VsZWN0KHRoaXMuX2lkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0U2VydmljZS5zZWxlY3RlZFVzZXJzW3RoaXMuX2lkXVtcImNoYXRPcGVuXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=