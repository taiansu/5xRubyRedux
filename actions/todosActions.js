import * as API from '../api.js'

export const addTodo = (description) => ({
  type: 'ADD_TODO',
  description
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

export const toogleTodo = () => ({ })

export const setVisibilityFilter = () => ({ })

// export {addTodo: addtodo, toogleTodo: toogleTodo}


