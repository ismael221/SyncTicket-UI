import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {ButtonModule} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { TieredMenu } from 'primeng/tieredmenu';



@Component({
  selector: 'app-contacts-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarModule,
    IconField,
    InputIcon,
    ButtonModule,
    SplitButton,
    TieredMenu
  ],
  templateUrl: './contacts-toolbar.component.html',
  styleUrl: './contacts-toolbar.component.scss'
})
export class ContactsToolbarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Adicionar contato',
        icon: 'pi pi-plus'
      },
      {
        label: 'Exportar contatos',
        icon: 'pi pi-upload'
      },
      {
        label: 'Importar contatos',
        icon: 'pi pi-download'
      }
    ];
  }
}
