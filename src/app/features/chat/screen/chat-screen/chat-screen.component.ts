import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ChatWindowComponent } from "../../chat-window/chat-window.component";
import { ChatListComponent } from '../../chat-list/chat-list.component';


@Component({
  selector: 'app-chat-screen',
  imports: [
    SplitterModule,
    ChatListComponent,
    ChatWindowComponent
],
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.scss'
})
export class ChatScreenComponent {

}
