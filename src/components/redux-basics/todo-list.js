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

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default TodoList;
