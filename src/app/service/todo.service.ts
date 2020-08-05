import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { 
  }
  //method to get all the todos as you can see it return an observable
  getTodos(){
    return this.http.get(this.baseUrl + 'todo');
  }

    //method to get one todo. returning an observable too
    getTodo(id){
        return this.http.get(this.baseUrl+ 'todo/'+ id);
    }

    //method to create a todo. return an observable too
    addTodo(addedtodo){
      return this.http.post(this.baseUrl + 'todo' , addedtodo);
    }

    //method to update a todo. return an observable too
    updateTodo(id, editedTodo){
        return this.http.put(this.baseUrl +'todo/' + id , editedTodo);
       
  
    }

    //method to delete one todo. return an observable too
    deleteTodo(id){
        return this.http.delete(this.baseUrl +'todo/' + id) ;
    }

}
