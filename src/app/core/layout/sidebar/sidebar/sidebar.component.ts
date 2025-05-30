import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {AvatarModule} from 'primeng/avatar';
import { Button } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvatarModule,
    RouterLink, 
    CommonModule,
    TooltipModule 
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(public router: Router) {}

  
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
