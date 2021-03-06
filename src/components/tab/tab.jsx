import React from "react";
import Clock from "../clock";
import LoginControl from "../login";
import FilterableProductTable from "../product/filterable-product-table";
import Game from "../tic-tac-toe/game";
import { NumberList } from "../numbers";
import { FormExample } from "../forms";
import Calculator from "../temperature-calculator";
import { WelcomeDialog } from "../containment-example";
import { TabTitle, TabContainer } from "./tab-elements";
import { numbers, PRODUCTS } from "../api/constants";
import { CounterContainer } from "../redux-basics/basics";
import { TodoApp } from "../redux-basics/todo-app";
import "./tab.css";
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: "Welcome Example",
          visible: true,
          content: <WelcomeDialog />
        },
        {
          title: "Clock",
          content: (
            <div>
              <Clock />
              <Clock />
            </div>
          ),
          visible: false
        },
        {
          title: "Login control",
          content: <LoginControl />,
          visible: false
        },
        {
          title: "Game",
          content: <Game />,
          visible: false
        },
        {
          title: "Filterable table",
          content: <FilterableProductTable products={PRODUCTS} />,
          visible: false
        },
        {
          title: "Number example",
          content: <NumberList numbers={numbers} />,
          visible: false
        },
        {
          title: "Forms example",
          content: <FormExample />,
          visible: false
        },
        {
          title: "Calculator example",
          content: <Calculator />,
          visible: false
        },
        {
          title: "Counter Redux",
          content: <CounterContainer />,
          visible: false
        },
        {
          title: "Todos",
          content: <TodoApp />,
          visible: false
        }
      ]
    };
  }

  toggleTab(i) {
    let tabs = this.state.tabs;
    tabs.forEach((tab, index) => (tab.visible = index === i));
    this.setState({ tabs: tabs });
  }

  render() {
    const tabs = this.state.tabs;

    const titles = tabs.map((tab, index) => (
      <TabTitle
        key={"tab" + index}
        {...tab}
        onClick={() => this.toggleTab(index)}
      />
    ));

    const containers = tabs.map((tab, index) => (
      <TabContainer key={"container" + index} {...tab} />
    ));

    return (
      <div className="tab">
        <div className="tab-header dark">
          <ul>{titles}</ul>
        </div>
        <div className="tab-body">{containers}</div>
        <div className="tab-footer dark" />
      </div>
    );
  }
}

export default Tab;
