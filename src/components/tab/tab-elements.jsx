import React from "react";
export const TabTitle = props => (
  <li className={props.visible ? "active" : "inactive"} onClick={props.onClick}>
    {props.title}
  </li>
);

export const TabContainer = props =>
  !props.visible ? null : (
    <div>
      <div className={"tab-content"}>{props.content}</div>
    </div>
  );
