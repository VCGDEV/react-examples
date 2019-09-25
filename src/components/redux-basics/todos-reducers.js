import { ADD_TODO, TOGGLE_TODO } from "./constants";
import { combineReducers } from "redux";
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

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      //reducer returns new array, concatenating current array with new item
      return { ...state, [action.id]: todo(state[action.id], action) };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

export const todos = combineReducers({ byId, allIds });

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const filterTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case "all":
      return allTodos;
    case "active":
      return allTodos.filter(todo => !todo.completed);
    case "completed":
      return allTodos.filter(todo => todo.completed);
    default:
      throw new Error(`Unknow filter ${filter}`);
  }
};
