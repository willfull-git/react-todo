import React, {useState} from 'react';
import classes from './styles.module.css';

const Controls = ({todos, setTodos}) => {
  const [name, setName] = useState('');
  const [nameValidationError, setNameValidationError] = useState('');

  const controls = [
    {
      name: 'add todo',
      className: classes.button,
      handler: handleAddTodo,
      active: true,
      isDisabled: todos.length===10? true: false,
    },
    {
      name: 'remove todo',
      className: classes.button,
      handler: handleRemoveTodo,
      active: todos.length? true: false,
      isDisabled: !todos.length? true: false,
    }
  ];

  // |--- Handlers
  function handleAddTodo() {
    const updatedTodos = [...todos];

    if( name.length<3 ){
      setNameValidationError('Name must be at least 3 characrers long!');
      return;
    }

    updatedTodos.push({
      id: updatedTodos.length+1,
      name: name
    });

    setTodos( updatedTodos );
    setName('');
    setNameValidationError('');
  }

  function handleRemoveTodo() {
    const updatedTodos = [...todos];

    updatedTodos.pop();

    setTodos( updatedTodos );
  }

  // |--- Render
  return (
    <div className={classes.todoControls}>
      <div>
        { controls.map(({name, className, handler, isDisabled}) => {
          return (
            <button
              key={name}
              className={className}
              onClick={handler}
              disabled={isDisabled}
            >
              {name}
            </button>
          )
        })}
      </div>

      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <p className={classes.validationMessage}>
          { nameValidationError }
        </p>
      </div>
    </div>
  );
}

export default Controls;
