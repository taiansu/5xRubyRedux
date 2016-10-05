import React, { Component } from 'react';
import VisibilityTodos from './VisibilityTodos.jsx'
import AddTodo from './AddTodo.jsx'

class App extends Component{
  render() {
    return (
      <div>
        <h1> Hello from ReactApp </h1>
        <VisibilityTodos />
        <AddTodo />
      </div>
    )
  }
}

export default App;
