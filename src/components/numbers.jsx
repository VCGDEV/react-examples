import React from "react";
export const NumberList = props => {
  const numbers = props.numbers;
  const listNumbers = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listNumbers}</ul>;
};
