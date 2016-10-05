import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList.jsx'
import { fetchTodos } from '../actions/todosActions.js'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.done)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.done)
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

class VisibilityTodos extends Component{
  componentDidMount(){
    this.props.dispatch(fetchTodos());
  }

  render() {
    return (
      <TodoList todos={this.props.todos}/>
    )
  }
}

VisibilityTodos =
  connect(mapStateToProps)(VisibilityTodos)

export default VisibilityTodos;
