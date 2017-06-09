import v4 from 'uuid/v4';
const assign = Object.assign;

const todos = (state = [{id: 1, description: "test"}], action) => {
  switch (action.type) {
    case 'ADDED_TODO':
      return state.concat(action.todo);
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (action.id !== todo.id) {
          return todo
        }
        return assign({}, todo, {done: !todo.done})
      })
    case 'RECEIVE_TODOS':
      return action.todos
    default:
      return state;
  }
}

export default todos;
