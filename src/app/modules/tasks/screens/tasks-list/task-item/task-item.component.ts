import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task;

  constructor( private _router: ActivatedRoute ) { }

  ngOnInit() {
    this._router.params.subscribe(
      res => console.log( res )
    )
  }

}
