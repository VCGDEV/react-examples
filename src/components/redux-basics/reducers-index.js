import { combineReducers } from "redux";
import { todos, visibilityFilter } from "./todos-app";
import { counter } from "./basics";

//combine reducers
/*const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
}); */
// if there names are the same use ES6
export const todoApp = combineReducers({
  todos,
  visibilityFilter,
  counter
});
