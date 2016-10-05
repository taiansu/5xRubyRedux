import { combineReducers } from 'redux'
import todos from './todos.js'
import visibilityFilter from './visibilityFilter.js'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

// default state =>
// {
//   "todos": [],
//   "visibilityFilter": 'SHOW_ALL'
// }

export default todoApp;
