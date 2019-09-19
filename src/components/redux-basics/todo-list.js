import React from "react";
import { Todo } from "./todo-component";
import { connect } from "react-redux";
import { toggleTodo } from "./action-creators";
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "./constants";
let TodoList = ({ todos, filter, onTodoClick }) => (
  <ul>
    {filterTodos(todos, filter).map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.visibilityFilter
  };
};

function filterTodos(todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default TodoList;
