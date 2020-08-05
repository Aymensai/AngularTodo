import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { DetailsTodoComponent } from './details-todo/details-todo.component';

const routes: Routes = [
  {
    path: '',
    
    data: {
      title: 'To do'
    }, 
    children: [
      {
        path : 'add',
        component: AddTodoComponent,
        data: {
          title: 'Add To do'
        }
      },
      {
        path : 'list',
        component: ListTodoComponent,
        data: {
          title: 'List To do'
        }
      },
     {
        path : 'update/:id',
        component: UpdateTodoComponent,
        data: {
          title: 'Update To do'
        }
      }, {
        path : 'details/:id',
        component: DetailsTodoComponent,
        data: {
          title: 'Details To do'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule {}
