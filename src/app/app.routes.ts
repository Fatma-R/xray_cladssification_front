import { Routes } from '@angular/router';
import { GlobalMetricsList } from './global-metrics-list/global-metrics-list';

export const routes: Routes = [{ path: '', redirectTo: 'global-metrics', pathMatch: 'full' },
  { path: 'global-metrics', component: GlobalMetricsList } ];
