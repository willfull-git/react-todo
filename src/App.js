import React, {Component} from 'react';
import classes from './App.module.css';
import dataTodo from './constants/dataTodo';

import TodoList from './components/TodoList';
import Controls from './components/Controls';

// |--- COMPONENT
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: dataTodo,
      controls: [
        { name: 'add item', className: classes.button, handler: this.handleAddTodo },
        { name: 'remove item', className: classes.button, handler: this.handleRemoveTodo }
      ]
    };
  }

  // |--- Handlers
  handleAddTodo = () => {
    const updatedTodos = [...this.state.todos];

    updatedTodos.push({
      id: updatedTodos.length+1,
      name: ''
    });

    this.setState({todos: updatedTodos});
  }

  handleRemoveTodo = () => {
    const updatedTodos = [...this.state.todos];

    updatedTodos.pop();

    this.setState({todos: updatedTodos});
  }

  render(){ return (
    <div className={classes.container}>
      <TodoList todos={this.state.todos}/>
      <Controls controls={this.state.controls}/>
    </div>
  )}
}

export default App;
