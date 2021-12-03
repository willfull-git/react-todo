import React, {Component} from 'react';
import classes from '../../App.module.css';

class Controls extends Component {
  render(){ return (
    <div className={classes.todoControls}>
      {this.props.children}
    </div>
  )}
}

export default Controls;
