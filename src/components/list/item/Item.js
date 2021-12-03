import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../../App.module.css';

const Item = (props)=>{
    return (
        <div className={classes.item}>
            <div className={classes.itemName}>
                <h3>Task: {props.data.id}</h3>
            </div>
        </div>
    );
}

Item.propTypes = {
    data: PropTypes.object
}

export default Item;
