import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { DetailsTodoComponent } from './details-todo/details-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ToDoRoutingModule} from './todo-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddTodoComponent, UpdateTodoComponent, DetailsTodoComponent, ListTodoComponent],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TodoModule { }
