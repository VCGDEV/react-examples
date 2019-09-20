import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/tab/tab";
import { fullApp } from "./components/redux-basics/reducers-index";
import { createStore } from "redux";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");

const persistedState = {
  todos: [{ id: 0, text: "Welcome back", completed: false }]
};

// creating new store
// second parameter will end in teh state and override reducer default value
const store = createStore(fullApp, persistedState);

ReactDOM.render(
  <Provider store={store}>
    <Tab className="App" />
  </Provider>,
  rootElement
);
