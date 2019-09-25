import React from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";
import TodoFilter from "./todo-filters";
export const TodoApp = ({ match }) => (
  <div>
    <AddTodo />
    <TodoFilter />
    <TodoList filter={match.params.filter || "all"} />
  </div>
);
