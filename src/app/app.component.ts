import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./core/layout/sidebar/sidebar/sidebar.component";
import { ChatScreenComponent } from "./features/chat/screen/chat-screen/chat-screen.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    ChatScreenComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ClientSync';
}
