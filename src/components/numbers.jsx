import React from "react";
export const NumberList = props => {
  const numbers = props.numbers;
  const listNumbers = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return (
    <fieldset>
      <legend>List example</legend>
      <ul>{listNumbers}</ul>
    </fieldset>
  );
};
