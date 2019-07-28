import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FireBase } from '../firebase.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public errorMsg: string;

  constructor(
    public dialogRef: MatDialogRef< RegistrationComponent >,
    private _fb: FormBuilder,
    private _firebase: FireBase
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * init registration form
   */
  initForm() {
    this.registrationForm = this._fb.group({
      nickname: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', Validators.required ]
    });
  }

  /**
   * create new user
   */
  onCreateUser() {
    const nickname = this.registrationForm.get( 'nickname' ).value;
    const email = this.registrationForm.get( 'email' ).value;
    const password = this.registrationForm.get( 'password' ).value;

    this._firebase.createUser( email, password, nickname )
      .then(
        res => {
          console.log( res );
          this.dialogRef.close();
        }
      )
      .catch(
        res => {
          console.log( res );
          this.errorMsg = res.message;
          console.log( this.errorMsg );
        }
      )
  }

}
