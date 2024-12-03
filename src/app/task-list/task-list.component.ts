import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
 tasks:Task[] = [{id:123, name:"Wash dishes"},{id:456, name:"hang laundry"},{id:789, name:"cook a meal"}]
 
 deleteTask(task:Task){
  let index = this.tasks.indexOf(task)
  this.tasks.splice(index,1)
 }

}
