import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./action-creators";
let AddTodo = ({ onClick }) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          onClick(input.value);
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onClick: text => dispatch(addTodo(text))
});

AddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodo);
export default AddTodo;
