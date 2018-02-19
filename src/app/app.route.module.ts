import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/services/guard.service';

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }