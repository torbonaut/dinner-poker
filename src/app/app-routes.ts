import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./features/dinner-poker/dinner-poker.module').then(m => m.DinnerPokerModule)
    }
];
