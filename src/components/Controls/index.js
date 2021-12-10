import React from 'react';
import classes from '../../App.module.css';

const Controls = ({todos, setTodos}) => {
  const controls = [
    {
      name: 'add item',
      className: classes.button,
      handler: handleAddTodo,
      active: true,
      isDisabled: todos.length===10? true: false,
    },
    {
      name: 'remove item',
      className: classes.button,
      handler: handleRemoveTodo,
      active: todos.length? true: false,
      isDisabled: !todos.length? true: false,
    }
  ];

  // |--- Handlers
  function handleAddTodo() {
    const updatedTodos = [...todos];

    updatedTodos.push({
      id: updatedTodos.length+1,
      name: ''
    });

    setTodos( updatedTodos );
  }

  function handleRemoveTodo() {
    const updatedTodos = [...todos];

    updatedTodos.pop();

    setTodos( updatedTodos );
  }

  // |--- Render
  return (
    <div className={classes.todoControls}>
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
  );
}

export default Controls;
