import { Component } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cardForm !: FormGroup;
  tasks : any [] = [];
  inprogress : any [] = [];
  done: any [] = [];
  constructor(private fb : FormBuilder){};

  ngOnInit(): void{
    this.cardForm = this.fb.group({
      item : ['', Validators.required]
    })
  }
}
