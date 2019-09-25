import React from "react";
import { Todo } from "./todo-component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleTodo } from "./action-creators";
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
  todos: filterTodos(state.todos, filter || "all")
});

const filterTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter(todo => !todo.completed);
    case "completed":
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

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
