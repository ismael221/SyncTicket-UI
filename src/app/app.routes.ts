import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        title: "SyncTicket | Relatórios",
        loadComponent: () => import('./features/dashboard/dashboard-screen/dashboard-screen.component').then(m => m.DashboardScreenComponent)
    },
    {
        path: 'chat',
        title: 'SyncTicket | Chat',
        loadComponent: () => import('./features/chat/screen/chat-screen/chat-screen.component').then(c => c.ChatScreenComponent)
    }
];
