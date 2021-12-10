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

  setTodos = (todos) => {
    this.setState({todos})
  }

  render(){ return (
    <div className={classes.container}>
      <TodoList todos={this.state.todos}/>
      <Controls todos={this.state.todos} setTodos={this.setTodos}/>
    </div>
  )}
}

export default App;
