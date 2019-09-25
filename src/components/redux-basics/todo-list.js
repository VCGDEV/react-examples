import React from "react";
import { Todo } from "./todo-component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleTodo } from "./action-creators";
import { filterTodos } from "./reducers-index";
let TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

/*
const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
}); */

const mapStateToProps = (
  state,
  {
    match: {
      params: { filter }
    }
  }
) => ({
  todos: filterTodos(state, filter || "all")
});

/* 
params are passed to action creator in same order, no need to create a 
mapDispatchToProps and instead use a configuration obejct { onTodoClick: toggleTodo }
*/

TodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);
export default TodoList;
