import { Routes } from '@angular/router';
import { InputFieldLandingPage } from '../pages/landing-page/landing.page';

export const routes: Routes = [
    {
        path: '',
        component: InputFieldLandingPage,
        pathMatch: 'full'
    }
];
