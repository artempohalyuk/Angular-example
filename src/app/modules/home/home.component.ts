import { Component, OnInit } from '@angular/core';
import { FireBase } from 'src/app/core/firebase.service';
import { User } from 'firebase';
import { TasksService } from '../tasks/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: User;
  public currentDayTasksCount: number;

  constructor(
    public firebase: FireBase,
    public tasksService: TasksService
  ) { }

  ngOnInit() {
    this.firebase.getCurrentUserObservable().then(
      res => {
        this.user = res;
      }
    );

    this.tasksService.getTasks().subscribe(
      res => this.currentDayTasksCount = this.tasksService.getCurrentDayTasksCount( res )
    );
  }
}
