import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public item = {
    name: '',
    description: ''
  }

  public items: any = []

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.todoService.listAll()
      .subscribe(result => {this.items = result},
      err => console.log(err))
  }

  add() {
    this.todoService.addNew(this.item)
      .subscribe(result => {
        this.items.push(this.item)
        this.resetItem()
      },
      err => console.log(err))
  }

  resetItem() {
    this.item = {
      name: '',
      description: ''
    }
  }

}
