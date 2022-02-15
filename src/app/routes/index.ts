import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'ngrx-input-field',
    loadChildren: () =>
      import('../modules/input-field/input-field.module').then(
        (module) => module.InputFieldModule
      ),
  },
];
