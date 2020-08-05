import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../service/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
updateForm : FormGroup;
id : any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadTodoById();
  }
  loadTodoById(){
this.todoService.getTodo(this.id).subscribe((bodyresponse)=>{
this.updateForm.patchValue(bodyresponse);
});
  }
update() {
  this.todoService.updateTodo(this.id, this.updateForm.value).subscribe((bodyresponse: any) => {
    this.router.navigateByUrl('/todo/list');
   });
  }
}
