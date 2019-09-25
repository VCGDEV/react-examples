import React from "react";
import Tab from "./components/tab/tab";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

// :filter? -> optional
// :filter required
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter?" component={Tab} />
    </BrowserRouter>
  </Provider>
);

export default Root;
