import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RulesComponent } from './dashboard/rules/rules.component';
import { CompositionComponent } from './dashboard/composition/composition.component';
import { BlogPageComponent } from './dashboard/blog-page/blog-page.component';

import { UserDataResolver } from './shared/resolvers/user-data.resolver';
import { BlogAddPageComponent } from './dashboard/blog-add-page/blog-add-page.component';
import { UserProfileContainerComponent } from './dashboard/containers/user-profile-container/user-profile-container.component';
import { EventsContainerComponent } from './dashboard/containers/events-container/events-container.component';
import { MainPageContainerComponent } from './dashboard/containers/main-page-container/main-page-container.component';
import { BlogPageContainerComponent } from './dashboard/containers/blog-page-container/blog-page-container.component';
import { BlogContainerComponent } from './dashboard/containers/blog-container/blog-container.component';




const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard],
  children: [
    { path: '', component: MainPageContainerComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'composition', component: CompositionComponent },
    { path: 'timeanons', component: EventsContainerComponent },
    { path: 'profile', component: UserProfileContainerComponent },
    { path: 'blog', component: BlogContainerComponent,
    children: [
      { path: '', component: BlogPageContainerComponent},
      { path: 'add', component: BlogAddPageComponent},
      { path: ':id', component: BlogPageComponent },
      { path: ':id/edit', component: BlogAddPageComponent },
    ] },
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
