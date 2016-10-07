import React, { Component } from 'react';

const TodoItem = ({todo, onTodoClick}) => (
  <li onClick={onTodoClick} style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
    {todo.description}
  </li>
)

class TodoList extends Component{
  todoItem(todo) {
    return <TodoItem key={todo.id}
                     todo={todo}
                     onTodoClick={() => this.props.onTodoClick(todo.id)} />
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return this.todoItem(todo)
        })}
      </ul>
    )
  }
}

export default TodoList
