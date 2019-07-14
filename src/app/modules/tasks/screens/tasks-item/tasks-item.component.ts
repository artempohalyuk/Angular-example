import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task;

  constructor( private _router: ActivatedRoute ) { }

  ngOnInit() {
    this._router.params.subscribe(
      res => console.log( res )
    )
  }

}
