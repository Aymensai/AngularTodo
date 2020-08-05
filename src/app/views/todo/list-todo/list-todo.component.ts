import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../../service/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos: any;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodo();
  }

  loadTodo() {
    this.todoService.getTodos().subscribe((bodyresponse: any) => {
      this.todos = bodyresponse;
    });
  }

  deleteTodo(id) {
    console.log(id);
    this.todoService.deleteTodo(id).subscribe((bodyresponse: any) => {
      console.log(bodyresponse);
    });
  }
}