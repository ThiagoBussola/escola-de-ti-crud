import { Route } from '@angular/router';
import { FeatureProductsComponent } from './feature-products.component';

export const accountFeatureProductsRoutes: Route[] = [
  { path: '', pathMatch: 'prefix', component: FeatureProductsComponent }
];
