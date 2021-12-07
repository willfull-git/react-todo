import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../../App.module.css';

const Todo = () =>
  <div className={classes.item}>
    <div className={classes.itemName}>
      <h3>Task: {this.props.todo.name}</h3>
    </div>
  </div>

Todo.propTypes = {
  data: PropTypes.object
}

export default Todo;
