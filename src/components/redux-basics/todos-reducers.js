import { ADD_TODO, TOGGLE_TODO } from "./constants";
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

export const filterTodos = (state, filter) => {
  switch (filter) {
    case "all":
      return state;
    case "active":
      return state.filter(todo => !todo.completed);
    case "completed":
      return state.filter(todo => todo.completed);
    default:
      throw new Error(`Unknow filter ${filter}`);
  }
};
