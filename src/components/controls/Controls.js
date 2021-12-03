import React from 'react';
import classes from '../../App.module.css';

const Controls = (props)=>{
  return (
    <div className={classes.todoControls}>
      {props.children}
    </div>
  );
}

export default Controls;
