import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, CdkDropListGroup, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { TasksService } from 'src/app/service/tasks.service';
import { Tasks } from 'src/app/model/task';



@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag],
})
export class CdkDragDropConnectedSortingGroupExample {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

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
