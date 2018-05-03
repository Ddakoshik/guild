import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';



const routes: Routes = [
  // { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},

  { path: 'dashboard', component: DashboardComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/auth' , pathMatch: 'full'},
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
