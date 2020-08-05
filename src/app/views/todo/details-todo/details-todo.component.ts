import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../../service/todo.service';

@Component({
  selector: 'app-details-todo',
  templateUrl: './details-todo.component.html',
  styleUrls: ['./details-todo.component.css']
})
export class DetailsTodoComponent implements OnInit {
detailsForm: FormGroup;
detail : any;
id : any;
  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadTodoById();
  }
  loadTodoById(){
this.todoService.getTodo(this.id).subscribe((bodyresponse)=>{
this.detail = (bodyresponse);
});
  }
}
