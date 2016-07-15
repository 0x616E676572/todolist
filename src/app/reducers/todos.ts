import { Action } from '@ngrx/store';

import { Todo } from '../interfaces';

interface TodosState {
  items: Todo[];
}

let initialState: TodosState = {
  items: []
};

export const ADD_TODO = 'add_todo';

export const todosReducer = (state: TodosState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, { items: [...state.items, action.payload] });
  }
  return state;
};
