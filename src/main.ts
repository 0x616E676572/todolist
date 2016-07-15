import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app';
import { todosReducer } from './app/reducers';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  provideStore({ todos: todosReducer })
]);
