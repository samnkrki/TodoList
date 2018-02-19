import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRouteModule } from './auth.route.module';
import { MaterialModule } from './../shared/material.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    AuthRouteModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
  ],
  providers: []
})
export class AuthModule { }
