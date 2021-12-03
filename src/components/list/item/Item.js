import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from '../../../App.module.css';

class Item extends Component {
  render(){ return (
    <div className={classes.item}>
      <div className={classes.itemName}>
        <h3>Task: {this.props.data.id}</h3>
      </div>
    </div>
  )}
}

Item.propTypes = {
    data: PropTypes.object
}

export default Item;
