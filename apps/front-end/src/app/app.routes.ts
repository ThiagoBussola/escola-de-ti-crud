import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () =>
      import('@main-project/account/feature-products').then(
        (m) => m.AccountFeatureProductsModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@main-project/account/feature-users').then(
        (m) => m.AccountFeatureUsersModule
      ),
  }
];
