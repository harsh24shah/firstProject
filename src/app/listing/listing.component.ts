import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})

export class ListingComponent implements OnInit {
  Todo = []; 
  myItem:any;
  CompletedTodos = [];
  constructor() { } 

  ngOnInit() {
  }
 
  addTodo(todo){
    if(todo){
      this.Todo.push(todo);
      //todo = ""; 
    }
      
  }

  removeTodo(id:number,todo:any){
    this.Todo.splice(id,1);
    this.CompletedTodos.push(todo);
    console.log(this.CompletedTodos);
  }
}
