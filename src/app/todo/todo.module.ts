import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/services/todo.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpModule
  ],
  declarations: [TodoComponent],
  providers: [TodoService],
  exports:[TodoComponent]
})
export class TodoModule { }
