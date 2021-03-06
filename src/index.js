import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./configure-store";
import Root from "./Root";

const rootElement = document.getElementById("root");
const store = configureStore();
ReactDOM.render(<Root store={store} />, rootElement);
