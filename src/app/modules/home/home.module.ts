import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      RouterModule.forChild(routes)
    ],
    declarations: [ HomeComponent ],
})

export class HomeModule { }

