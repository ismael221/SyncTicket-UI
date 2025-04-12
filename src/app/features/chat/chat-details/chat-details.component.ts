import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-chat-details',
  imports: [
    ButtonModule
  ],
  templateUrl: './chat-details.component.html',
  styleUrl: './chat-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDetailsComponent {

  @Output() close = new EventEmitter<void>();


}
