import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ChatWindowComponent } from "../../chat-window/chat-window.component";
import { ChatListComponent } from '../../chat-list/chat-list.component';
import { ChatDetailsComponent } from "../../chat-details/chat-details.component";


@Component({
  selector: 'app-chat-screen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SplitterModule,
    ChatListComponent,
    ChatWindowComponent,
    ChatDetailsComponent
],
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.scss'
})
export class ChatScreenComponent {

    constructor(
      private cd: ChangeDetectorRef
    ) {}
  
    showDetails = false

    toggleDetails() {
      console.log(!this.showDetails)
      this.showDetails = !this.showDetails;
    

    }

    refresh(){
      console.log("Refresco")
      this.cd.detectChanges();
    }
}
