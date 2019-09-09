import React from "react";

const FancyBorder = props => (
  <div className={"FancyBorder FancyBorder-" + props.color}>
    {props.children}
  </div>
);

export const WelcomeDialog = props => (
  <FancyBorder color="blue">
    <h1 className="dialog-title">Welcome</h1>
    <p className="dialog-message">Thank you for visiting our spacecraft!</p>
  </FancyBorder>
);
