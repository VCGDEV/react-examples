import { fullApp } from "./components/redux-basics/reducers-index";
import { createStore } from "redux";
import { loadState, saveState } from "./load-state";
import throttle from "lodash/throttle";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log(`%c prev state: `, `color: gray`, store.getState());
    console.log(`%c action`, `color: blue`, action);
    const returnValue = rawDispatch(action);
    console.log(`%c next state`, `color: green`, store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const persistedState = loadState();

  // creating new store
  // second parameter will end in teh state and override reducer default value
  const store = createStore(fullApp, persistedState);

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }

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
