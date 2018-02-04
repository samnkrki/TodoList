import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{TodoComponent} from './todo/todo/todo.component'

const routes: Routes = [

    { path:'todo', component:TodoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }