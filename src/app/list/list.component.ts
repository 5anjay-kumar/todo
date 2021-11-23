import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from "../list/task.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  deleteButton = faTrashAlt;
  taskList: Task[] = [];
  task = '';
  isComplete: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    if (this.task) {
      this.taskList.push({task: this.task, isDone: false});
      this.task = '';
    }
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }
}
