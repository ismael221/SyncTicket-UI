import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menu} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';

@Component({
  selector: 'app-sidebar',
  imports: [
    Menu,
    AvatarModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Caixa de Entrada', icon: 'pi pi-inbox' },
      { label: 'Conversas', icon: 'pi pi-comment' },
      { label: 'Capitão', icon: 'pi pi-server' },
      { label: 'Contatos', icon: 'pi pi-address-book' },
      {
        label: 'Forum',
        icon: 'pi pi-book',
        routerLink: '/knowledge-base'
      },
      { label: 'Relatórios', icon: 'pi pi-chart-line' },
      { label: 'Central de Ajuda', icon: 'pi pi-search' },
      { label: 'Configurações', icon: 'pi pi-cog' }
    ];
  }
}
