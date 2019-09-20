import React from "react";
import Tab from "./components/tab/tab";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Tab} />
    </HashRouter>
  </Provider>
);

export default Root;
