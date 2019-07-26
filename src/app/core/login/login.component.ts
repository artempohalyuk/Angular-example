import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { FireBase } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMsg: string;

  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _fireBase: FireBase
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init login form
   */
  initForm() {
    this.loginForm = this._fb.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', Validators.required ]
    });
  }

  /**
   * open registration modal
   */
  onOpenRegistation() {
    this._dialog.open( RegistrationComponent, {
      autoFocus: false
    } );
  }

  /**
   * sign in to system
   */
  onSignIn() {
    const email = this.loginForm.get( 'email' ).value;
    const password = this.loginForm.get( 'password' ).value;
    this._fireBase.signIn( email, password );
  }

}
