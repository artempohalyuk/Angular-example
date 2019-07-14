import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
// import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', canLoad: [ AuthGuard ] },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule', canLoad: [ AuthGuard ] },
  { path: 'tasks', loadChildren: './modules/tasks/tasks.module#TasksModule', canLoad: [ AuthGuard ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
