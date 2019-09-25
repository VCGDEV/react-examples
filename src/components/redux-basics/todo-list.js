import React from "react";
import { Todo } from "./todo-component";
import { connect } from "react-redux";
import { toggleTodo } from "./action-creators";
let TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

const mapStateToProps = (state, ownProps) => ({
  todos: filterTodos(state.todos, ownProps.filter)
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

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default TodoList;
