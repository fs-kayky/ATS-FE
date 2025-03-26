import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/global/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'role-managment',
    loadComponent: () => import('./modules/roles/pages/management/management.component').then(m => m.ManagementComponent)
  },
  {
    path: 'job-managment/:jobId',
    loadComponent: () => import('./modules/jobs/pages/jobs-managment/jobs-managment.component').then(m => m.JobsManagmentComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
