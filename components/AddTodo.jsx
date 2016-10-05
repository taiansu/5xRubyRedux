import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions.js'

class AddTodo extends Component{
  constructor(props){
    super(props)
    this.state = { inputText: "" }
  }

  handleChange(evt){
    this.setState({inputText: evt.target.value})
  }

  handleClick(){
    this.props.dispatch(addTodo(this.state.inputText))
    this.setState({inputText: ''})
  }

  render(){
    return (
      <div>
        <input type="text"
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>Add Todo</button>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo);

export default AddTodo;
