import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MainComponent } from './dashboard/main/main.component';
import { RulesComponent } from './dashboard/rules/rules.component';
import { CompositionComponent } from './dashboard/composition/composition.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { BlogComponent } from './dashboard/blog/blog.component';

import { UserDataResolver } from './shared/resolvers/user-data.resolver';



const routes: Routes = [
  // { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},

  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard], resolve: { message: UserDataResolver },
children: [
    { path: '', component: MainComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'composition', component: CompositionComponent },
    { path: 'timeanons', component: TimetableComponent },
    { path: 'blog/:id', component: BlogComponent, },
]},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/dashboard' , pathMatch: 'full'},
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ UserDataResolver
  ]
})
export class AppRoutingModule { }
