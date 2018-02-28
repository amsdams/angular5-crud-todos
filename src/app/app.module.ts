import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
const appRoutes: Routes = [
	{
		path : 'todos',
		component : TodoComponent,
		data : {
			title : 'Todo List'
		}
	},
	{
		path : 'todo-details/:id',
		component : TodoDetailComponent,
		data : {
			title : 'Todo Details'
		}
	},
	{
		path : 'todo-create',
		component : TodoCreateComponent,
		data : {
			title : 'Todo Create'
		}
	},
	{
		path : 'todo-edit/:id',
		component : TodoEditComponent,
		data : {
			title : 'Todo Edit'
		}
	},
	{
		path : '',
		redirectTo : '/todos',
		pathMatch : 'full'
	}
];
@NgModule({
	declarations : [
	AppComponent,
		TodoComponent,
		TodoDetailComponent,
		TodoCreateComponent,
		TodoEditComponent
	],
	imports : [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(
			appRoutes,
			{
				enableTracing : true
			} // <-- debugging purposes only
		)
	],
	providers : [],
	bootstrap : [ AppComponent ]
	})
export class AppModule {
	}