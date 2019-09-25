import { combineReducers } from "redux";
import { todos, filterTodos as fromTodos } from "./todos-reducers";
import { counter } from "./basics";

//combine reducers
/*const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
}); */
// if there names are the same use ES6
export const fullApp = combineReducers({
  todos,
  counter
});

export const filterTodos = (state, filter) => fromTodos(state.todos, filter);
