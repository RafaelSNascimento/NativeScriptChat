import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { ChatBoxComponent } from "./pages/chat-box/chat-box.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { CommonFunctionsService } from "./services/common-functions-service/common-functions.service";
import { SingletonService } from "./services/singleton-service/singleton.service";
import { SocketService } from "./services/socket-service/socket.service";
import { UserChatService } from "./services/userChat-service/userChat.service";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatBoxComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    ReactiveFormsModule,
    NativeScriptUIListViewModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [ UserChatService, CommonFunctionsService, SingletonService, SocketService,  FormBuilder ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
