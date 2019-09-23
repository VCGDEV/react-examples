import React from "react";
import { NavLink } from "react-router-dom";

const isActive = (match, location) => {
  if (match) {
    const active = match.path === `\\${location.pathname}`;
    if (active) {
      console.log(`Active link: ${match.path}`);
    }
    return active;
  } else {
    return false;
  }
};

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === "all" ? "/" : `/${filter}`}
    activeClassName="active-filter"
    activeStyle={{ textDecoration: "none", color: "black" }}
    isActive={isActive}
  >
    {children}
  </NavLink>
);

let TodoFilter = () => (
  <div>
    <FilterLink filter="all">All</FilterLink>{" "}
    <FilterLink filter="active">Active</FilterLink>{" "}
    <FilterLink filter="completed">Completed</FilterLink>
  </div>
);

export default TodoFilter;
