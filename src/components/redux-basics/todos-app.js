import { combineReducers, createStore } from "redux";
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETED = "SHOW_COMPLETED";
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

const todos = (state = [], action) => {
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

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

//combine reducers
/*const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
}); */
// if there names are the same use ES6
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
// creating new store
const store = createStore(todoApp);

console.log("Initial state");
console.log(store.getState());
console.log("---------------------");
console.log(`Dispatching: ${ADD_TODO}`);
store.dispatch({
  type: ADD_TODO,
  id: 0,
  text: "Learn redux"
});
console.log(`Current state`);
console.log(store.getState());
console.log("---------------------");

console.log(`Dispatching: ${SET_VISIBILITY_FILTER}`);
store.dispatch({
  type: SET_VISIBILITY_FILTER,
  filter: SHOW_ALL
});
console.log(`Current state`);
console.log(store.getState());
console.log("---------------------");
