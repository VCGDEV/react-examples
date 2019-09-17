import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL
} from "./constants";
//reducer composition
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      } else {
        return { ...state, completed: !state.completed };
      }

    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      //reducer returns new array, concatenating current array with new item
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export const visibilityFilter = (state = SHOW_ALL, action) => {
  console.log("visibility filter");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log(action);
      return action.filter;
    default:
      return state;
  }
};
