import { CommonModule } from '@angular/common';
import {Component, ViewEncapsulation} from '@angular/core';
import { PanelModule } from 'primeng/panel';



@Component({
  selector: 'app-chat-list',
  imports: [
    PanelModule,
    CommonModule
  ],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent {

  chats: any = [
    {
      name: 'Eu',
      lastMessage: '<b>Você:</b> _asdfasdfasdf...',
      time: 'Yesterday',
      image: null,
      muted: false
    },
    {
      name: 'Meu Amor ❤️',
      lastMessage: 'Tá muito frio aqui',
      time: '7:43 PM',
      image: 'assets/imgs/profile.jpg',
      muted: false
    },
    {
      name: 'Família abençoada',
      lastMessage: '<b>~ Eliane 🙏🏻🕊️:</b> Coisa linda da vovó',
      time: '7:38 PM',
      image: 'assets/imgs/profile.jpg',
      muted: true
    },
    {
      name: 'Angular - Geral',
      lastMessage: '<b>~ Paulo:</b> 🧑🏻‍💻',
      time: '7:25 PM',
      image: 'assets/imgs/profile.jpg',
      muted: true
    },
    {
      name: 'Bate papo uberhub',
      lastMessage: '<b>~ Ferdinando Kun 🚀:</b> Vagas & Oportunidades...',
      time: '7:08 PM',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocJU4MZnRXLlAncHegtAf6FC_gChpZFOXMK3Gryi1j7tc8fmrW2PUA=s288-c-no',
      muted: false
    },
    {
      name: 'Clube Santo 🔥',
      lastMessage: '<b>~ Juan Oliveira:</b> Refutando algumas fake News...',
      time: '5:58 PM',
      image: 'assets/imgs/clube-santo.png',
      muted: false
    },
    {
      name: 'Eu',
      lastMessage: '<b>Você:</b> _asdfasdfasdf...',
      time: 'Yesterday',
      image: null,
      muted: false
    },
    {
      name: 'Meu Amor ❤️',
      lastMessage: 'Tá muito frio aqui',
      time: '7:43 PM',
      image: 'assets/imgs/avatar1.jpg',
      muted: false
    },
    {
      name: 'Família abençoada',
      lastMessage: '<b>~ Eliane 🙏🏻🕊️:</b> Coisa linda da vovó',
      time: '7:38 PM',
      image: 'assets/imgs/family.jpg',
      muted: true
    },
    {
      name: 'Angular - Geral',
      lastMessage: '<b>~ Paulo:</b> 🧑🏻‍💻',
      time: '7:25 PM',
      image: 'assets/imgs/angular-group.png',
      muted: true
    },
    {
      name: 'Bate papo uberhub',
      lastMessage: '<b>~ Ferdinando Kun 🚀:</b> Vagas & Oportunidades...',
      time: '7:08 PM',
      image: 'assets/imgs/u-icon.png',
      muted: false
    },
    {
      name: 'Clube Santo 🔥',
      lastMessage: '<b>~ Juan Oliveira:</b> Refutando algumas fake News...',
      time: '5:58 PM',
      image: 'assets/imgs/clube-santo.png',
      muted: false
    },
    {
      name: 'Eu',
      lastMessage: '<b>Você:</b> _asdfasdfasdf...',
      time: 'Yesterday',
      image: null,
      muted: false
    },
    {
      name: 'Meu Amor ❤️',
      lastMessage: 'Tá muito frio aqui',
      time: '7:43 PM',
      image: 'assets/imgs/avatar1.jpg',
      muted: false
    },
    {
      name: 'Família abençoada',
      lastMessage: '<b>~ Eliane 🙏🏻🕊️:</b> Coisa linda da vovó',
      time: '7:38 PM',
      image: 'assets/imgs/family.jpg',
      muted: true
    },
    {
      name: 'Angular - Geral',
      lastMessage: '<b>~ Paulo:</b> 🧑🏻‍💻',
      time: '7:25 PM',
      image: 'assets/imgs/angular-group.png',
      muted: true
    },
    {
      name: 'Bate papo uberhub',
      lastMessage: '<b>~ Ferdinando Kun 🚀:</b> Vagas & Oportunidades...',
      time: '7:08 PM',
      image: 'assets/imgs/u-icon.png',
      muted: false
    },
    {
      name: 'Clube Santo 🔥',
      lastMessage: '<b>~ Juan Oliveira:</b> Refutando algumas fake News...',
      time: '5:58 PM',
      image: 'assets/imgs/clube-santo.png',
      muted: false
    },
    {
      name: 'Eu',
      lastMessage: '<b>Você:</b> _asdfasdfasdf...',
      time: 'Yesterday',
      image: null,
      muted: false
    },
    {
      name: 'Meu Amor ❤️',
      lastMessage: 'Tá muito frio aqui',
      time: '7:43 PM',
      image: 'assets/imgs/avatar1.jpg',
      muted: false
    },
    {
      name: 'Família abençoada',
      lastMessage: '<b>~ Eliane 🙏🏻🕊️:</b> Coisa linda da vovó',
      time: '7:38 PM',
      image: 'assets/imgs/family.jpg',
      muted: true
    },
    {
      name: 'Angular - Geral',
      lastMessage: '<b>~ Paulo:</b> 🧑🏻‍💻',
      time: '7:25 PM',
      image: 'assets/imgs/angular-group.png',
      muted: true
    },
    {
      name: 'Bate papo uberhub',
      lastMessage: '<b>~ Ferdinando Kun 🚀:</b> Vagas & Oportunidades...',
      time: '7:08 PM',
      image: 'assets/imgs/u-icon.png',
      muted: false
    },
    {
      name: 'Clube Santo 🔥',
      lastMessage: '<b>~ Juan Oliveira:</b> Refutando algumas fake News...',
      time: '5:58 PM',
      image: 'assets/imgs/clube-santo.png',
      muted: false
    }
  ];

}
