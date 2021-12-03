import {useState} from 'react';
import classes from './App.module.css';

import List from './components/list/List';
import Item from './components/list/item/Item';
import Controls from './components/controls/Controls';

// |--- DATA
const dataItems = [
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' },
  { id: 5, name: '' },
];

// |--- UTILS
const addItem = (items) => {
  const editedItems = [...items];

  editedItems.push({
    id: editedItems.length,
    name: ''
  });

  return editedItems;
}

const removeItem = (items) => {
  const editedItems = [...items];

  editedItems.pop();

  return editedItems;
}

// |--- COMPONENT
function App() {
  const [items, setItems] = useState(dataItems); 

  const handleAddItem = () => {
    setItems( addItem(items) );
  }

  const handleRemoveItem = () => {
    setItems( removeItem(items) );
  }

  return (
    <div className={classes.container}>
      <List>
        { items.map((item)=> <Item key={item.id} data={item}></Item> ) }
      </List>
      <Controls>
        <button
          className={classes.button}
          type="button"
          onClick={ handleAddItem }
        >
          Add
        </button>
        <button
          className={classes.button}
          type="button"
          onClick={ handleRemoveItem }
        >
          Remove
        </button>
      </Controls>
    </div>
  );
}

export default App;
