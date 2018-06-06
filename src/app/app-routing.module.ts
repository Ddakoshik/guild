import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';
import { MainComponent } from './dashboard/main/main.component';
import { RulesComponent } from './dashboard/rules/rules.component';
import { CompositionComponent } from './dashboard/composition/composition.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { BlogComponent } from './dashboard/blog/blog.component';



const routes: Routes = [
  // { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},

  { path: 'dashboard', component: DashboardComponent,
children: [
    { path: '', component: MainComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'composition', component: CompositionComponent },
    { path: 'rules', component: TimetableComponent },
    { path: 'blog', component: BlogComponent },
]},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/auth' , pathMatch: 'full'},
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
