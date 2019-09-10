import React from "react";
import Clock from "../clock";
import LoginControl from "../login";
import FilterableProductTable from "../product/filterable-product-table";
import Game from "../tic-tac-toe/game";
import { NumberList } from "../numbers";
import { FormExample } from "../forms";
import Calculator from "../temperature-calculator";
import { WelcomeDialog } from "../containment-example";

const TabTitle = props => <li onClick={props.onClick}>{props.title}</li>;

class TabContainer extends React.Component {
  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <div>
        <div className={"tab-content"}>{this.props.content}</div>
      </div>
    );
  }
}

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
          content: <Clock />,
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
        title={tab.title}
        onClick={() => this.toggleTab(index)}
      />
    ));

    const containers = tabs.map((tab, index) => (
      <TabContainer
        key={"container" + index}
        content={tab.content}
        visible={tab.visible}
      />
    ));

    return (
      <div>
        <div>
          <ul>{titles}</ul>
        </div>
        <div>{containers}</div>
        <div>Footer</div>
      </div>
    );
  }
}

export default Tab;

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

const numbers = [0, 1, 2, 3, 4, 5];
