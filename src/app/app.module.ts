import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

import { AppRoutingModule } from './app.route.module'

import { BaseService } from './shared/base.service'
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
