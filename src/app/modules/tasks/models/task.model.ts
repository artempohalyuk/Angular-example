export interface ITaskResponse {
  id: string;
  title: string;
  description: string;
  task_date: string;
  created_at: string;
}

export class TaskModel {
  id: string;
  title: string;
  description: string;
  task_date: string;
  created_at: string;

  constructor( task: ITaskResponse ) {
    this.updateTaskField( task );
  }

  updateTaskField( task: ITaskResponse ) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.task_date = task.task_date;
    this.created_at = task.created_at;
  }
}
