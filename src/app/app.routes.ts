import { Routes } from '@angular/router';
import { HomeRoute } from './routes/home/home.route';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeRoute },
    { path: '**', redirectTo: 'home' }
];