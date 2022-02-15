import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../modules/home/home.module').then((module) => module.HomeModule),
  },
];
