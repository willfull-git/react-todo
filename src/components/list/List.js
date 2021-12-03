import classes from '../../App.module.css';

const List = (props)=>{
    return (
        <div className={classes.list}>
            { props.children }
        </div>
    );
}

export default List;
