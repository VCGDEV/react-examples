import { DECREMENT, INCREMENT } from "./constants";
import { increment, decrement } from "./action-creators";
import { connect } from "react-redux";
import React from "react";
export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
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

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

const mapStateToProps = state => {
  return {
    value: state
  };
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
