import { LoginComponent } from "./pages/login/login.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { ChatBoxComponent } from "./pages/chat-box/chat-box.component";
import { UserChatService } from "./services/userChat-service/userChat.service";

// Rotas do App
export const routes = [
  { path: "login", component: LoginComponent },
  { path: 'chat', component: ChatComponent},
  { path: "chatbox/:_id", component: ChatBoxComponent, resolve: { fetchUser: UserChatService } }
  // OBS: a rota "chatbox" precisa ter os dados do usuário selecionado antes de carregar a view,
  // para isso, existe o serviço UserChatService em que é uma promise responsável por alimentar esses dados
]

export const navigatableComponents = [
  LoginComponent,
  ChatComponent,
  ChatBoxComponent
];