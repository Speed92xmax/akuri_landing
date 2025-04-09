import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import(
        './modules/landing-manager/pages/landing-home/landing-home.component'
      ).then((m) => m.LandingHomeComponent),
  },
];
