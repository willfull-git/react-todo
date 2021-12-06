import React from 'react';
import classes from '../../App.module.css';

const Controls = ({controls})=>{
  return (
    <div className={classes.todoControls}>
      { controls.map(({name, className, handler}) =>
          <button className={className} onClick={handler}>{name}</button>
      )}
    </div>
  );
}

export default Controls;
