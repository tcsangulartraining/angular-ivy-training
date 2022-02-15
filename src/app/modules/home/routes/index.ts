import { Routes } from '@angular/router';
import { HomeLandingPage } from '../pages/landing-page/landing.page';

export const routes: Routes = [
    {
        path: '',
        component: HomeLandingPage,
        pathMatch: 'full'
    }
];
