import React from "react";
import { TodoApp } from "./components/redux-basics/todo-app";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

// :filter? -> optional
// :filter required
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter?" component={TodoApp} />
    </BrowserRouter>
  </Provider>
);

export default Root;
