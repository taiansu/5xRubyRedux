import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList.jsx'
import { fetchTodos, toggleTodo } from '../actions/todosActions.js'

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

// 原本 mapDispatchToProps 應該也要傳一個 function，
// 但若改傳 object，connect 會將每個 value 函式用 dispatch 包裝。
// 下面這個物件，經過 connect 之後，會被轉成右邊註解的函式
const mapDispatchToProps = {        // const mapDispatchToProps = (dispatch) => {
  onTodoClick: toggleTodo，         //   onTodoClick: (id) => dispatch(toggleTodo(id)),
  fetchTodos                        //   fetchTodos: () => dispatch(fetchTodos())
}                                   // }
                                    // 注意 onTodoClick 跟內部的 toggleTodo 一樣，都拿一個 id 當參數
                                    // 外層的 fetchTodos 跟內層的 fetchTodos 都不需要參數
                                    // 內外層都接受一樣的參數，才可以用物件的簡寫法

class VisibilityTodos extends Component{
  componentDidMount(){
    this.props.fetchTodos();        // mapDispatchToProps 包好之後就可以直接呼叫了
  }

  render() {
    return (
      <TodoList todos={this.props.todos} onTodoClick={this.props.onTodoClick}/>
    )
  }
}

VisibilityTodos =
  connect(mapStateToProps, mapDispatchToProps)(VisibilityTodos)

export default VisibilityTodos;
