import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import LoginControl from "./components/login";
import { NumberList } from "./components/numbers";
import { FormExample } from "./components/forms";
import Calculator from "./components/temperature-calculator";
import { WelcomeDialog } from "./components/containment-example";
import FilterableProductTable from "./components/product/filterable-product-table";
import Game from "./components/tic-tac-toe/game";
const numbers = [0, 1];
const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
const App = () => (
  <div>
    <Game />
    <p />
    <FilterableProductTable products={PRODUCTS} />
    <Clock />
    <NumberList numbers={numbers} />
    <LoginControl />
    <FormExample />
    <Calculator />
    <WelcomeDialog />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
