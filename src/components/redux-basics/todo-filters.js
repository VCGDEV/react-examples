import React from "react";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "./constants";
import { setVisibilityFilter } from "./action-creators";
import { connect } from "react-redux";

const FilterLink = ({ active, onClick, title }) => {
  if (active) {
    return <span> {title}</span>;
  } else {
    return (
      <a href="#" onClick={onClick}>
        {title}
      </a>
    );
  }
};

let TodoFilter = ({ filter, setVisibilityFilter }) => (
  <div>
    <FilterLink
      active={filter === SHOW_ALL}
      title={"All"}
      onClick={() => setVisibilityFilter(SHOW_ALL)}
    />{" "}
    <FilterLink
      active={filter === SHOW_ACTIVE}
      title={"Active"}
      onClick={() => setVisibilityFilter(SHOW_ACTIVE)}
    />{" "}
    <FilterLink
      active={filter === SHOW_COMPLETED}
      title={"Completed"}
      onClick={() => setVisibilityFilter(SHOW_COMPLETED)}
    />
  </div>
);

const mapStateToProps = state => ({
  filter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter(filter) {
    dispatch(setVisibilityFilter(filter));
  }
});

TodoFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter);

export default TodoFilter;
