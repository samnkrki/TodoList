import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

import { AppRoutingModule } from './app.route.module'

import { BaseService } from './shared/base.service'
import { MaterialModule } from './shared/material.module';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/guard.service';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    BaseService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
