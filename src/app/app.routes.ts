import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'inbox',
        title: "Inbox",
        loadComponent: () => import('./features/inbox/inbox/inbox.component').then(i => i.InboxComponent),
        canActivate:[AuthGuard]
    },
    {
        path:'dashboard',
        title: "SyncTicket | Relatórios",
        loadComponent: () => import('./features/dashboard/dashboard-screen/dashboard-screen.component').then(m => m.DashboardScreenComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'chat',
        title: 'SyncTicket | Chat',
        loadComponent: () => import('./features/chat/screen/chat-screen/chat-screen.component').then(c => c.ChatScreenComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'login',
        title: 'SyncTicket | Login',
        loadComponent: () => import('./features/login/login/login.component').then(c=> c.LoginComponent)
    },
    {
        path: 'knowledge',
        title: 'Knowledge Base',
        loadComponent: () => import('./features/knowledge-base/kb-articles/kb-articles.component').then(k => k.KbArticlesComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'tickets',
        title: 'Chamados',
        loadComponent: () => import('./features/tickets/tickets/tickets.component').then(t => t.TicketsComponent),
        canActivate:[AuthGuard]
    },
    {
        path:'contacts',
        title: "Contatos",
        loadComponent: () => import('./features/contacts/contacts/contacts.component').then(c => c.ContactsComponent)
    },
    {
        path: 'agenda',
        title: "Agenda",
        loadComponent: () => import('./features/agenda/agenda/agenda.component').then(a => a.AgendaComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'ia',
        title: "Inteligência Articial",
        loadComponent: () => import('./features/artificial-intelligence/articial-intelligence/articial-intelligence.component').then(ai => ai.ArticialIntelligenceComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'settings',
        title: "Configurações",
        loadComponent: () => import('./features/settings/settings/settings.component').then(s => s.SettingsComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'profile',
        title: 'Perfil',
        loadComponent: () => import('./features/profile/profile/profile.component').then(p => p.ProfileComponent),
        canActivate:[AuthGuard]
    },
    {
        path: 'robots',
        title: 'Robôs',
        loadComponent: () => import('./features/robots/robots.component').then(r => r.RobotsComponent),
        canActivate:[AuthGuard]
    }
];
