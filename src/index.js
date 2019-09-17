import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/tab/tab";
import { counter } from "./components/redux-basics/basics";
import { createStore } from "redux";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");

// creating new store
const store = createStore(counter);
ReactDOM.render(
  <Provider store={store}>
    <Tab className="App" />
  </Provider>,
  rootElement
);
