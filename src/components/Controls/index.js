import React from 'react';
import classes from '../../App.module.css';

const Controls = ({controls}) => 
  <div className={classes.todoControls}>
    { controls.map(({name, className, handler}) => 
      <button key={name} className={className} onClick={handler}>{name}</button>
    )}
  </div>

export default Controls;
