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
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  
}
