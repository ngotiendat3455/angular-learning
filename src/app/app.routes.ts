import { Routes } from '@angular/router';

export const ROUTE_PATHS = Object.freeze({
    HOME: 'home',
    QUIZ: 'quiz',
    RESULT:'result',
  });


export const routes: Routes = [
  {
    path: ROUTE_PATHS.HOME,
    loadComponent: () => import("./pagination/pagination.component").then((c) => c.PaginationComponent)
  },
  {
    path: 'birthday',
    loadComponent: () => import('./birthday/birthday.component').then(c => c.BirthdayComponent),
  },
  {
    path: 'tour',
    loadComponent: () => import('./app-tours/app-tours.component').then(c => c.AppToursComponent),
  },
  {
    path: 'review',
    loadComponent: () => import('./app-review/app-review.component').then(c => c.AppReviewComponent),
  },
  {
    path: 'according',
    loadComponent: () => import("./accordion/accordion.component").then(c => c.AccordionComponent)
  },
  {
    path: 'menu',
    loadComponent: () => import("./menu-app/menu-app.component").then(c => c.MenuAppComponent)
  },
  {
    path: 'tabs',
    loadComponent: () => import("./app-tab/app-tab.component").then(c => c.AppTabComponent)
  },
  {
    path: 'slider',
    loadComponent: () => import("./app-slider/app-slider.component").then(c => c.AppSliderComponent)
  },
  {
    path: 'grocery-bud',
    loadComponent: () => import("./grocery-bud/grocery-bud.component").then(c => c.GroceryBudComponent)
  },
  {
    path: 'sidebar-modal',
    loadComponent: () => import("./home-sidebar/home-sidebar.component").then(c => c.HomeSidebarComponent)
  },
  {
    path: 'stripe',
    loadComponent: () => import("./stripe-menu/stripe-menu.component").then((c) => c.StripeMenuComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import("./cart/cart.component").then((c) => c.CartComponent)
  },
  {
    path: 'pagination',
    loadComponent: () => import("./pagination/pagination.component").then((c) => c.PaginationComponent)
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
