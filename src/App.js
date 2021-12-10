import {useState} from 'react';
import classes from './App.module.css';
import dataTodo from './constants/dataTodo';

import List from './components/TodoList';
import Controls from './components/Controls';

// |--- COMPONENT
function App() {
  const [todos, setTodos] = useState(dataTodo); 

  return (
    <div className={classes.container}>
      <List todos={todos}/>
      <Controls todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
