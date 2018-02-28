import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.http.get('/todo').subscribe(data => {
		  this.todos = data;
	});
  }

}
