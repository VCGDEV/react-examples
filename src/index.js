import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/tab/tab";

const App = () => (
  <div>
    <Tab />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
