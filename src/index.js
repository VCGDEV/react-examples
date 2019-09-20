import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/tab/tab";
import { fullApp } from "./components/redux-basics/reducers-index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./load-state";
import throttle from "lodash/throttle";

const rootElement = document.getElementById("root");

const persistedState = loadState();

// creating new store
// second parameter will end in teh state and override reducer default value
const store = createStore(fullApp, persistedState);

store.subscribe(
  throttle(() => {
    // save only todo list and not all state properties
    saveState({
      todos: store.getState().todos
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <Tab className="App" />
  </Provider>,
  rootElement
);
