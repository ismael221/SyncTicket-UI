import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatListComponent} from './features/chat/chat-list/chat-list.component';
import { SidebarComponent } from "./core/layout/sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChatListComponent,
    SidebarComponent,
    SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ClientSync';
}
