import { fullApp } from "./components/redux-basics/reducers-index";
import { createStore } from "redux";
import { loadState, saveState } from "./load-state";
import throttle from "lodash/throttle";

const configureStore = () => {
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

  return store;
};

export default configureStore;
