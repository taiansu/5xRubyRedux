import React, { Component } from 'react';

const TodoItem = ({todo}) => (
  <li>
    {todo.description}
  </li>
)

class TodoList extends Component{
  todoItem(todo) {
    return <TodoItem key={todo.id}
                     todo={todo} />
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
