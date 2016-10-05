import * as API from '../api.js'

const addedTodo = (todo) => ({
  type: 'ADDED_TODO',
  todo: todo
})

const loading = () => ({
  type: 'LOADING'
})

const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos
})

export const fetchTodos = () => dispatch => {
  dispatch(loading());
  return API.fetchTodos('all').then(todos => dispatch(receiveTodos(todos)))
}

export const addTodo = (text) => dispatch => {
  dispatch(loading());
  return API.addTodo(text).then(todo => dispatch(addedTodo(todo)))
}

export const toogleTodo = () => ({ })

export const setVisibilityFilter = () => ({ })

// export {addTodo: addtodo, toogleTodo: toogleTodo}


