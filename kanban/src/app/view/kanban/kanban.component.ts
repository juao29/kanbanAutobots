import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { TasksService } from 'src/app/service/tasks.service';
import { Tasks } from 'src/app/model/task';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  taskList: Tasks[] = [];
  tasks = new Tasks();
  
  constructor(private tasksService: TasksService){};
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listar() {
    this.tasksService.listar().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  inserir() {
    this.tasksService.inserir(this.tasks).subscribe(tasks => {
      this.listar();
    });
  }

  remover(id: number) {
    this.tasksService.excluir(id).subscribe(() => {
      this.listar();
    });
  }

 
  
}
