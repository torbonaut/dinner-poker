import { Routes } from "@angular/router";
import {PageLoginComponent} from "./core/components/page-login/page-login.component";
import {AuthGuard} from "./core/guards/auth.guard";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: PageLoginComponent,
        data: { showHeader: false, yolo: 'Bolo' }
    },
    {
        path: 'home',
        loadChildren: () => import('./features/dinner-poker/dinner-poker.module').then(m => m.DinnerPokerModule),
        canActivate: [AuthGuard]
    }
];
