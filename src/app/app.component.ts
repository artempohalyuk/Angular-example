import { Component } from '@angular/core';
import { FireBase } from './core/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( public fireBase: FireBase ) {}

  onSignOut() {
    this.fireBase.signOut();
  }
}
