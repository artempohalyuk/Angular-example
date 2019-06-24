import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeFormComponent } from './authorize-form/authorize-form.component';

@NgModule({
    imports: [
      CommonModule,
      CoreRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule
    ],
    declarations: [ HeaderComponent, FooterComponent, LoginComponent, RegistrationComponent, AuthorizeFormComponent ],
    exports: [RouterModule],
    entryComponents: [ RegistrationComponent ]
})

export class CoreModule { }

