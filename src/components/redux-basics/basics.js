import { createStore } from "redux";
import React from "react";
const counter = (state = 0, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const store = createStore(counter);

export const CounterContainer = props => (
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: "INCREMENT" })}
    onDecrement={() => store.dispatch({ type: "DECREMENT" })}
  />
);

/*
const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  dispatch({});
  return { getState, dispatch, subscribe };
};
*/
