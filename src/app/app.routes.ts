import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'candidate-views',
    pathMatch: 'full'
  },
  {
    path: 'candidate-views',
    loadComponent: () => import('./modules/candidates/view-candidates/view-candidates.component').then(m => m.ViewCandidatesComponent)
  },
  {
    path: '**',
    redirectTo: 'candidate-views'
  }
];
