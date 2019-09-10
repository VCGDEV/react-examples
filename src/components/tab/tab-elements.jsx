import React from "react";
export const TabTitle = props => <li onClick={props.onClick}>{props.title}</li>;

export const TabContainer = props => {
  return !props.visible ? null : (
    <div>
      <div className={"tab-content"}>{props.content}</div>
    </div>
  );
};
