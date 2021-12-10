import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../../App.module.css';

const Todo = ({todo})=>{
    return (
        <div className={classes.todo}>
            <div className={classes.todoName}>
                <h3>Task: {todo.name}</h3>
            </div>
        </div>
    );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
  })
}

export default Todo;
