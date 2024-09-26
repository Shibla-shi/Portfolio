// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'projects', loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'education', loadChildren: () => import('./components/education/education.module').then(m => m.EducationModule) },
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  // { path: '', redirectTo: 'about', pathMatch: 'full' },
  // { path: '**', redirectTo: 'about' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





