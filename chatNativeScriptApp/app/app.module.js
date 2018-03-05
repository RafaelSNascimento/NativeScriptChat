"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var http_1 = require("nativescript-angular/http");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var chat_box_component_1 = require("./pages/chat-box/chat-box.component");
var chat_component_1 = require("./pages/chat/chat.component");
var common_functions_service_1 = require("./services/common-functions-service/common-functions.service");
var singleton_service_1 = require("./services/singleton-service/singleton.service");
var socket_service_1 = require("./services/socket-service/socket.service");
var userChat_service_1 = require("./services/userChat-service/userChat.service");
var angular_1 = require("nativescript-ui-listview/angular");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chat_component_1.ChatComponent,
                chat_box_component_1.ChatBoxComponent,
                login_component_1.LoginComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                forms_2.ReactiveFormsModule,
                angular_1.NativeScriptUIListViewModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            providers: [userChat_service_1.UserChatService, common_functions_service_1.CommonFunctionsService, singleton_service_1.SingletonService, socket_service_1.SocketService, forms_2.FormBuilder],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzREFBdUU7QUFDdkUsNkNBQThEO0FBQzlELGtEQUFtRTtBQUNuRSx3Q0FBa0U7QUFDbEUsaURBQStDO0FBQy9DLGlFQUErRDtBQUMvRCwwRUFBdUU7QUFDdkUsOERBQTREO0FBQzVELHlHQUFzRztBQUN0RyxvRkFBa0Y7QUFDbEYsMkVBQXlFO0FBQ3pFLGlGQUErRTtBQUMvRSw0REFBZ0Y7QUFzQmhGO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFwQnJCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixxQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLDJCQUFtQjtnQkFDbkIsc0NBQTRCO2dCQUM1QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQzthQUN6QztZQUNELFNBQVMsRUFBRSxDQUFFLGtDQUFlLEVBQUUsaURBQXNCLEVBQUUsb0NBQWdCLEVBQUUsOEJBQWEsRUFBRyxtQkFBVyxDQUFFO1lBQ3JHLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhdEJveENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbW1vbkZ1bmN0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb21tb24tZnVuY3Rpb25zLXNlcnZpY2UvY29tbW9uLWZ1bmN0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2luZ2xldG9uLXNlcnZpY2Uvc2luZ2xldG9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb2NrZXQtc2VydmljZS9zb2NrZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlckNoYXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXNlckNoYXQtc2VydmljZS91c2VyQ2hhdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBDaGF0Q29tcG9uZW50LFxuICAgIENoYXRCb3hDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBwcm92aWRlcnM6IFsgVXNlckNoYXRTZXJ2aWNlLCBDb21tb25GdW5jdGlvbnNTZXJ2aWNlLCBTaW5nbGV0b25TZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlLCAgRm9ybUJ1aWxkZXIgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==