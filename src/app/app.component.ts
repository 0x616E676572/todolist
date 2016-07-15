import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './interfaces';
import { ADD_TODO } from './reducers';

@Component({
  selector: 'todolist-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl()
  });

  todos: Observable<Todo[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.todos = this.store.select(s => s.todos.items);
  }

  onSubmit() {
    this.store.dispatch({ type: ADD_TODO, payload: this.form.value });
  }
}
