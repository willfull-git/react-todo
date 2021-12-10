import classes from './styles.module.css';

import Todo from './Todo';

const TodoList = ({todos})=>{
  return (
    <div className={classes.list}>
      { todos.map((todo)=> <Todo key={todo.id} todo={todo}></Todo> ) }
    </div>
  );
}

export default TodoList;
