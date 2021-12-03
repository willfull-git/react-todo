import React, {Component} from 'react';
import classes from '../../App.module.css';

class List extends Component {
  render(){ return (
    <div className={classes.list}>
      { this.props.children }
    </div>
  )}
}

export default List;
