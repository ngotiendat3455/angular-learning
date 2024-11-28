import { Routes } from '@angular/router';

export const ROUTE_PATHS = Object.freeze({
    HOME: 'home',
    QUIZ: 'quiz',
    RESULT:'result',
  });

  
export const routes: Routes = [
    {
        path: ROUTE_PATHS.HOME,
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
      },
      {
        path: '',
        redirectTo: ROUTE_PATHS.HOME,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: ROUTE_PATHS.HOME,
      }
];
