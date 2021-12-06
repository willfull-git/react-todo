import {useState} from 'react';
import classes from './App.module.css';
import dataTodo from './constants/dataTodo';

import List from './components/TodoList';
import Controls from './components/Controls';

// |--- COMPONENT
function App() {
  const [todos, setTodos] = useState(dataTodo); 
  const controls = [
    { name: 'add item', className: classes.button, handler: handleAddTodo },
    { name: 'remove item', className: classes.button, handler: handleRemoveTodo }
  ];

  function handleAddTodo() {
    const updatedTodos = [...todos];

    updatedTodos.push({
      id: updatedTodos.length,
      name: ''
    });

    setTodos( updatedTodos );
  }

  function handleRemoveTodo() {
    const updatedTodos = [...todos];

    updatedTodos.pop();

    setTodos( updatedTodos );
  }

  return (
    <div className={classes.container}>
      <List todos={todos}/>
      <Controls controls={controls}/>
    </div>
  );
}

export default App;
