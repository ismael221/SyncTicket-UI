import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-chat',
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Opções',
            items: [
              {
                label: 'Informações de contato',
                icon: 'pi pi-info-circle'
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
