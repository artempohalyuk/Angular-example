import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authorize-form',
  templateUrl: './authorize-form.component.html',
  styleUrls: ['./authorize-form.component.scss']
})
export class AuthorizeFormComponent implements OnInit, OnChanges {
  @Input() inputForm: FormGroup;
  @Input() errorsMsg: string;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    console.log( this.errorsMsg );
  }

}
