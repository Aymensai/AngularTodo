import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../../service/todo.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
addForm : FormGroup;

  constructor(private router: Router, private todoService: TodoService) { }
  
 
  ngOnInit(): void {  
this.addForm = new FormGroup ({
  title: new FormControl("", Validators.required),
  description: new FormControl("", Validators.required),
});
  }

add() {
  this.todoService.addTodo(this.addForm.value).subscribe((bodyresponse: any) => {
    this.router.navigateByUrl('/todo/list');
   });
}

}
