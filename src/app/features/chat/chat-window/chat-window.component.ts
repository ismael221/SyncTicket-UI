import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output,ChangeDetectorRef, OnChanges, SimpleChanges, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-chat-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent implements OnInit, OnChanges{

   openDetails = output<void>();
  
  constructor(private cd: ChangeDetectorRef) {}

  abrirDetalhes() {
    this.openDetails.emit();
    this.refresh()
  }

  refresh() {
    console.log("Refresco")
    this.cd.detectChanges();
  }


  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Opções',
            items: [
              {
                label: 'Informações de contato',
                icon: 'pi pi-info-circle',
                command: () => this.abrirDetalhes()
            },
                {
                  label: 'Editar',
                  icon: 'pi pi-user-edit'
              },
              {
                label: 'Mutar',
                icon: 'pi pi-bell-slash'
            },
                {
                    label: 'Recarregar',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Exportar',
                    icon: 'pi pi-upload'
                }
            ]
        }
    ];
}

ngOnChanges(changes: SimpleChanges): void {
    console.log("Mudou")
}
  messages = [
    {
      text: 'Oi',
      time: '9:24 PM',
      type: 'received'
    },
    {
      text: 'Oi',
      time: '9:25 AM',
      type: 'sent'
    },
    {
      text: 'Tudo bem?',
      time: '9:26 AM',
      type: 'received'
    },
    
    // adicione mais mensagens aqui
  ];
}
