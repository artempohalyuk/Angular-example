import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
// import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'  },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: 'tasks', loadChildren: './modules/tasks/tasks.module#TasksModule', canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
