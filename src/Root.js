import React from "react";
import Tab from "./components/tab/tab";
import { Provider } from "react-redux";

const Root = ({ store }) => (
  <Provider store={store}>
    <Tab className="App" />
  </Provider>
);

export default Root;
