import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {



  public item = {
    _id: '',
    name: '',
    description: '',
    isDisabled: false
  }

  public items: any = []

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.todoService.listAll()
      .subscribe(result => { this.items = result },
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
  remove(id: string, i) {
    this.todoService.remove(id)
      .subscribe(result => {
        this.items.splice(i, 1)
      }, e => console.log(e))
  }

  updateState(id: string) {
    this.todoService.updateState(id)
      .subscribe(result => {
        console.log(result.isDisabled)
      }, e => console.log(e))
  }

  resetItem() {
    this.item = {
      _id: '',
      name: '',
      description: '',
      isDisabled:false
    }
  }

}
