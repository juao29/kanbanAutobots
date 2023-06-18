import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Itask } from '../model/tasks';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cardForm !: FormGroup;
  tasks : Itask [] = [];
  inprogress : Itask [] = [];
  done: Itask [] = [];
  updateIndex!:any;
  isEditEnabled : boolean = false;
  constructor(private fb : FormBuilder){};

  ngOnInit(): void{
    this.cardForm = this.fb.group({
      item : ['', Validators.required]
    })
  }

  addTask(){
    this.tasks.push({
      description: this.cardForm.value.item,
      done:false
    });
    this.cardForm.reset();
  }

  onEdit(item:Itask, i : number){
    this.cardForm.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditEnabled = true;
  }

  updateTask(){
    this.tasks[this.updateIndex].description = this.cardForm.value.item;
    this.tasks[this.updateIndex].done = false;
    this.cardForm.reset();
    this.updateIndex = undefined;
    this.isEditEnabled = false;
  }

  deleteTask(i : number){
    this.tasks.splice(i, 1);
  }

  
  deleteInProgressTask(i : number){
    this.inprogress.splice(i, 1);
  }

  
  deleteDoneTask(i : number){
    this.done.splice(i, 1);
  }

  

  drop(event: CdkDragDrop<Itask[]>) {
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
